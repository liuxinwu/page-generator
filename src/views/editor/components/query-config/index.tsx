import classnames from 'classnames'
import Style from './index.module.scss'
import {
  StateType,
  ActiveComponentType
} from 'store/type'
import { useSelector, useDispatch } from 'react-redux'
import { Tabs, Collapse } from 'antd'
import { baseConfig } from 'config/queryConfig'
import { Suspense } from 'react'

const CONFIG_COM = {
  text: React.lazy(() => import('components/business/text-config/index')),
} as { [index: string]: any }

const { Panel } = Collapse
const { TabPane } = Tabs

// useSelector、useDispatch 代理 connect
// 降低编码的繁琐
export default function QueryConfig() {
  const activeComponent = useSelector<StateType, ActiveComponentType>(state => state.activeComponent)
  const dispatch = useDispatch()

  function handleHidden() {
    dispatch({
      type: 'REPLACE_ACTIVE_COMPONENTS',
      value: { name: '', dom: undefined },
    })
  }

  function callback(key: string) {
    console.log(key)
  }

  function getDefaultValue(atter: string) {
    if (!activeComponent.dom) return 0
    const dom = activeComponent.dom
    const { style } = dom

    switch (atter) {
      case 'opacity':
        return +style[atter] || 1
      case 'rotate': {
        const transform = style.transform
        const rotate = transform.match(/rotate\((\d+)deg\)/)
        return parseInt((rotate && rotate[1]) || '0')
      }
      case 'border':
        return {
          style: style.borderStyle,
          width: parseInt(style.borderWidth),
          radius: parseInt(style.borderRadius),
          color: style.borderColor,
        }
      case 'box-shadow':
        const boxShadow = style.boxShadow
        if (!boxShadow) return {}
        const [, rgb = '', other = ''] = boxShadow.match(
          /(rgb\([\d, ]+\))?(.+)/
        )
        const [hShadow = 0, vShadow = 0, blur = 0, spread = 0, type = ''] =
          other.trim().split(' ')
        return {
          hShadow: parseInt(hShadow) || 0,
          vShadow: parseInt(vShadow),
          blur: parseInt(blur),
          spread: parseInt(spread),
          color: rgb,
          type,
        }
      case 'position-size':
        const { top, right, bottom, left } = style
        return {
          width: dom.offsetWidth,
          height: dom.offsetHeight,
          top: parseInt(top),
          right: parseInt(right),
          bottom: parseInt(bottom),
          left: parseInt(left),
        }
    }
    return 0
  }

  function setConfig(name: string, atter: string, value: number | string) {
    if (!activeComponent.name) return
    let cssText = ''
    switch (atter) {
      case 'opacity':
        cssText = `${atter}:${value};`
        break
      case 'rotate':
        cssText = `transform: rotate(${value}deg);`
        break
      case 'border':
        cssText = value as string
        break
      case 'box-shadow':
        cssText = value as string
        break
      case 'position-size':
        cssText = value as string
        break
    }
    const newCssText = (activeComponent.dom!.style.cssText += cssText)
    dispatch({
      type: 'EDIT_USE_COMPONENTS',
      value: {
        name,
        css: newCssText,
      },
    })
  }

  function getCurrentConfigCom() {
    const type = activeComponent.name.split('_')[0]
    const Com = CONFIG_COM[type]

    switch(type) {
      case 'text': {
        return <Panel header="文本配置" key={type}>
          <Suspense fallback="加载中...">
            {Com && <Com /> || null}
          </Suspense>
        </Panel>
      }
      default: return null
    }
  }

  return (
    <div
      className={classnames(
        'animate__animated',
        Style.query_config_wrap,
        (activeComponent?.name && 'animate__fadeInRightBig') ||
          'animate__fadeOutRightBig'
      )}
      onClick={(e) => e.stopPropagation()}
    >
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="配置" key="1">
          <Collapse
            defaultActiveKey={['1']}
            expandIconPosition={'right'}
            bordered={false}
            accordion
          >
            {getCurrentConfigCom()}
            
            {baseConfig.map((config) => {
              const Com = config.com
              return (
                <Panel header={config.title} key={config.title}>
                  {Com && (
                    <Com
                      {...config.options}
                      comName={activeComponent.name}
                      atter={config.atter}
                      onConfigChange={setConfig}
                      defaultValue={getDefaultValue(config.atter) as any}
                    />
                  )}
                </Panel>
              )
            })}
          </Collapse>
        </TabPane>
        <TabPane tab="动画" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="事件" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>

      <span className={Style.hidden_btn} onClick={handleHidden}>
        隐藏
      </span>
    </div>
  )
}

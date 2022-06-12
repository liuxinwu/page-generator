import { memo, useCallback, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import Style from './index.module.css'
import { Provider, connect } from 'react-redux'
import { store } from 'store/index'
import { StateType, UseComponentsType, ActionType } from 'store/type'
import Storage from 'utils/store'
import Operate from 'components/common/operate'
import { uid } from 'uid'
import Equipment from '../equipment'
import { equipmentList } from 'config/equipment'
import useMouseEvent from 'hooks/useMouseEvent'
import { centerPosition } from 'utils/dom'

// 本地存储
const STORAGE = new Storage()
let zIndex = 0

const mapState = (state: StateType) => {
  return {
    state,
  }
}

const mapDispatch = (
  dispatch: (
    argu: ActionType<UseComponentsType | [string, UseComponentsType][]>
  ) => void
) => {
  return {
    addUseComponents: (value: UseComponentsType) => {
      dispatch({
        type: 'ADD_USE_COMPONENTS',
        value,
      })
    },
    initUseComponents: (value: [string, UseComponentsType][]) => {
      dispatch({
        type: 'INIT_USE_COMPONENTS',
        value,
      })
    },
    replaceActiveComponent: (value: UseComponentsType) => {
      dispatch({
        type: 'REPLACE_ACTIVE_COMPONENTS',
        value,
      })
    },
  }
}

const Editor = function ({
  addUseComponents,
  initUseComponents,
  replaceActiveComponent,
}: {
  addUseComponents: (value: UseComponentsType) => void
  initUseComponents: (value: [string, UseComponentsType][]) => void
  replaceActiveComponent: (value: UseComponentsType) => void
}) {
  let { current: editorWrap } = useRef<HTMLDivElement | null>(null)
  const editorMain = useRef<HTMLDivElement | null>(null)
  const [equipment, setEquipment] = useState(equipmentList[1])
  const { w, h } = equipment.size
  const { moveOffset, handleMouseDown } = useMouseEvent()

  // 渲染组件
  const render = useCallback(
    function (
      type: string,
      target: HTMLDivElement,
      query: object,
      name: string,
      css = '',
      text = '',
      isAdd = false
    ): Promise<void> {
      return new Promise(async (resolve, reject) => {
        try {
          // path 必须是一个路径的形式 / ./ ../
          // 需要让浏览器认识它
          const modules = import.meta.glob(
            '../../../../components/common/*/index.tsx'
          )
          for (const path in modules) {
            if (path.endsWith(`${type}/index.tsx`)) {
              modules[path]().then(function (_) {
                const Com = _.default
                const options = {
                  ...query,
                  name,
                  draggable: false,
                  status: 'editor',
                }
                const div = document.createElement('div')
                div.className += ' cursor_move el_block'
                div.style.cssText = css
                target.append(div)
                isAdd && replaceActiveComponent({ name, dom: div })
                ReactDOM.render(
                  // 为了能够在 ReactDOM.render 动态添加的组件中使用 redux
                  <Provider store={store}>
                    <Operate currentEl={div} name={name}>
                      {/* 禁止默认的拖拽行为 */}
                      {type === 'text' ? (
                        <Com {...options}>{text}</Com>
                      ) : (
                        <Com {...options} />
                      )}
                    </Operate>
                  </Provider>,
                  div
                )
                resolve()
              })
            }
          }
        } catch (error) {
          reject(error)
        }
      })
    },
    [replaceActiveComponent]
  )

  // 处理放置
  const handleDrop = useCallback(
    async (event: React.DragEvent) => {
      if (!event.dataTransfer.getData('custom/drag')) return

      const editorMainEl = editorMain.current
      if (!editorMainEl) return

      const { clientY } = event
      const { top } = editorMainEl.getBoundingClientRect()

      // 阻止默认事件
      event.preventDefault()
      const { componentName: type, options: query } = JSON.parse(
        event.dataTransfer.getData('custom/drag')
      )
      const name = `${type}_${uid(5)}`

      const css = `
      position: absolute;
      top: ${clientY - top}px;
      right: 0;
      left: 0;
      z-index: ${++zIndex};
    `
      addUseComponents({
        name,
        type,
        css,
        text: '',
        query,
      })
      await render(type, editorMainEl, query, name, css, '', true)
    },
    [addUseComponents, render]
  )

  // 读取已保存数据
  useEffect(() => {
    ;(async () => {
      const target = editorMain.current

      if (!target) return

      const useComponents =
        (await STORAGE.getItem<[string, UseComponentsType][]>(
          'useComponents'
        )) || []
      initUseComponents(useComponents)
      let index = 0
      const len = useComponents.length
      while (index < len) {
        const {
          type = '',
          name,
          query = {},
          css,
          text,
        } = useComponents[index][1]

        if (name === 'root') {
          target.style.cssText += css
          index++
          continue
        }

        const oldZIndex = Number(css?.match(/(z-index: (\d+))/)?.[2])
        if (oldZIndex > zIndex) zIndex = oldZIndex
        await render(type, target, query, name, css, text)
        index++
      }
    })()
  }, [])

  // 修改设备尺寸
  useEffect(() => {
    const target = editorMain.current

    if (!target) return
    const { height } = target.getBoundingClientRect()
    target.style.cssText += `width: ${w}px;height: ${
      height > h ? height : h
    }px;`
  }, [w, h])

  // editorMain 元素默认居中
  // 利用 js 控制居中、方便以后的拖动位置计算
  useEffect(() => {
    if (!editorMain.current && !editorWrap) return

    centerPosition(editorWrap!, editorMain.current!)
  }, [])

  // 给 editorWrap 元素添加鼠标移动事件、控制 editorMain 元素的位置
  useEffect(() => {
    editorWrap?.addEventListener('mousedown', handleMouseDown)

    return () => {
      editorWrap?.removeEventListener('mousedown', handleMouseDown)
    }
  }, [handleMouseDown])

  useEffect(() => {
    if (!editorMain.current) return

    const { x, y } = moveOffset
    const style = editorMain.current.style
    // 排除以百分比为单位的 transform
    const [, , tLeft = 0, tTop = 0] =
      style.transform?.match(/((-{0,1}[\d\.]+px), (-{0,1}[\d\.]+px))/) ?? []
    style.transform = `translate(${parseInt(`${tLeft}`) + x}px, ${
      parseInt(`${tTop}`) + y
    }px)`
  }, [moveOffset])

  return (
    <div
      id="editorWrap"
      ref={(el) => (editorWrap = el)}
      className={classnames(Style['editor-wrap'])}
    >
      <div
        id="editorMain"
        ref={(el) => (editorMain.current = el)}
        className={classnames(
          Style['editor-main'],
          'animate__animated animate__fadeIn'
        )}
        onDrop={handleDrop}
        onDragOver={(event) => {
          event.preventDefault()
        }}
      >
        <Operate currentEl="editorMain" name="root" />

        <Equipment setEquipment={setEquipment} />
      </div>
    </div>
  )
}

const EditorConnect = connect(mapState, mapDispatch)(Editor)

export default memo(EditorConnect)

/**
 * 记录使用的所有组件思路
 * 全局 store 记录一个 useComponents Map
 * key 为 name + id 通过 ReactDom.render 渲染时传入
 * value 为 当前组件的配置项 {
 *  type: 'Block',
 *  css: {},
 *  text: ''
 * }
 *
 * 保存草稿就保存这份记录就行
 */

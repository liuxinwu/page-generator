import { memo, useCallback, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import Style from './index.module.css'
import { Provider, connect } from 'react-redux'
import { store } from 'store/index'
import { StateType, UseComponentsType, ActionType, EquipmentType } from 'store/type'
import Storage from 'utils/store'
import Operate from 'components/common/operate'
import { uid } from 'uid'

// 本地存储
const STORAGE = new Storage()
let zIndex = 0

const mapState = (state: StateType) => {
  return {
    state,
  }
}

const mapDispatch = (dispatch: (argu: ActionType<UseComponentsType | [string, UseComponentsType][]>) => void) => {
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
  equipment,
  addUseComponents,
  initUseComponents,
  replaceActiveComponent
}: {
  addUseComponents: (value: UseComponentsType) => void
  initUseComponents: (value: [string, UseComponentsType][]) => void
  replaceActiveComponent: (value: UseComponentsType) => void
  equipment: EquipmentType
}) {
  const editorMain = useRef<HTMLDivElement | null>()
  const { w, h } = equipment.size

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
                const div = document.createElement('div')
                div.className += ' cursor_move el_block'
                div.style.cssText = css
                target.append(div)
                isAdd && replaceActiveComponent({ name, dom: div })
                ReactDOM.render(
                  // 为了能够在 ReactDOM.render 动态添加的组件中使用 redux
                  <Provider store={store}>
                    <Operate currentEl={div} name={name}>
                      <Com {...query} name={name} status="editor">
                        {text}
                      </Com>
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
      const target = document.querySelector('#editorWrap') as HTMLDivElement

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
      await render(type, target, query, name, css, '', true)
    },
    [addUseComponents, render]
  )

  // 读取已保存数据
  useEffect(() => {
    ;(async () => {
      const target = editorMain.current

      if (!target) return

      const useComponents =
        (await STORAGE.getItem<[string, UseComponentsType][]>('useComponents')) || []
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

  return (
    <div className={classnames(Style['editor-wrap'])}>
      <div
        id="editorWrap"
        ref={(el) => (editorMain.current = el)}
        className={classnames(Style['editor-main'])}
        onDrop={handleDrop}
        onDragOver={(event) => {
          event.preventDefault()
        }}
      >
        <Operate currentEl="editorWrap" name="root" />
      </div>
    </div>
  )
}

const EditorConnect = connect(
  mapState,
  mapDispatch
)(Editor)

export default memo(EditorConnect, (props, preProps) => {
  return props.equipment.name === preProps.equipment.name
})

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

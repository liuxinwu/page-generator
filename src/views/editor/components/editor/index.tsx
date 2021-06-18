import React, { memo, useCallback, useEffect, useRef } from "react";
import ReactDOM from 'react-dom'
import classnames from "classnames";
import Style from "./index.module.css";
import { Provider, connect } from 'react-redux'
import { store } from 'store'
import { UseComponentsType } from 'store/type'
import Storage from 'utils/store'
import Operate from 'components/common/operate'
import { uid } from 'uid'

let zIndex = 0

const mapState = (state: any) => {
  return {
    state
  }
}

const mapDispatch = (dispatch: any) => {
  return {
    addUseComponents: (action: any) => {
      dispatch(action)
    },
    initUseComponents: (action: any) => {
      dispatch(action)
    }
  }
}

const STORAGE = new Storage()

const Editor = connect(mapState, mapDispatch)(function(props: {
  equipment: {
    name: string;
    size: {
      w: number;
      h: number;
    };
  };
}) {
  const editorMain = useRef<HTMLDivElement | null>()
  const { w, h } = props.equipment.size;
  const render = function(type: string, target: HTMLDivElement, query: object, name: string, css = ''): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const source = await import(`components/common/${type}`)
        const Com = source.default
        const div = document.createElement('div')
        div.className += ' cursor_move'
        div.style.cssText = css
        target.append(div)
        ReactDOM.render(
          // 为了能够在 /components/common/chart/components/dynamicChart 使用 redux
          <Provider store={store} >
            <Operate currentEl={div} name={name} >
              <Com {...query} name={name} status="editor"/>
            </Operate>
          </Provider>,
          div
        )
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }
  const addUseComponents = useCallback(function (value: UseComponentsType) {
    props['addUseComponents']({
      type: 'ADD_USE_COMPONENTS',
      value
    })
  }, [props])
  const initUseComponents = useCallback(function (value: UseComponentsType[]) {
    props['initUseComponents']({
      type: 'INIT_USE_COMPONENTS',
      value
    })
  }, [props])
  const handleDrop = useCallback(async (event: React.DragEvent) => {
    const { clientY } = event
    const editorMainEl = editorMain.current
    if (!editorMainEl) return
    const { top } = editorMainEl.getBoundingClientRect()

    // 阻止默认事件
    event.preventDefault();
    /**
     * 暂时没用到，换了思路写
     * 之前是用 innerHTML 的思路、但事件失效
     * 后采用复用组件的思路
     */
    let { componentName: type, options: query } = JSON.parse(event.dataTransfer.getData("custom/drag"));
    event.dataTransfer.clearData();
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
      query
    })
    await render(type, target, query, name, css)
  }, [addUseComponents]);

  // 读取已保存数据
  useEffect(() => {
    (async() => {
      const target = editorMain.current

      if (!target) return

      const useComponents = (await STORAGE.getItem<UseComponentsType[]>('useComponents') || [])
      initUseComponents(useComponents)
      let index = 0
      const len = useComponents.length
      while (index < len) {
        const { type = '', name, query = {}, css } = useComponents[index][1]

        if (name === 'root') {
          target.style.cssText += css
          index++
          continue
        }

        const oldZIndex = Number(css.match(/(z-index: (\d+))/)[2])
        if (oldZIndex > zIndex) zIndex = oldZIndex
        await render(type, target, query, name, css)
        index++
      }
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 修改设备尺寸
  useEffect(() => {
    const target = editorMain.current

    if (!target) return
    const { height } = target.getBoundingClientRect()
    target.style.cssText += `width: ${w}px;height: ${ height > h ? height : h }px;`
  }, [w, h])

  return (
    <div className={classnames(Style["editor-wrap"])}>
      <div
          id="editorWrap"
          ref={el => editorMain.current = el}
          className={classnames(Style["editor-main"])}
          onDrop={handleDrop}
          onDragOver={(event) => {
            event.preventDefault();
          }}
        >
          <Operate currentEl="editorWrap" name="root" />
        </div>
    </div>
  );
})

export default memo(Editor, (props, preProps) => {
  return props.equipment.name === preProps.equipment.name;
});

/**
 * 记录使用的所有组件思路
 * 全局 store 记录一个 useComponents 对象
 * key 为 name + id 通过 ReactDom.render 渲染时传入
 * value 为 当前组件的配置项 {
 *  type: 'Block',
 *  css: {},
 *  text: ''
 * } 
 * 
 * 保存草稿就保存这份记录就行
 */
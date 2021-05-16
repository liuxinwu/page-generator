import React, { memo, useCallback, useEffect, useRef } from "react";
import ReactDOM from 'react-dom'
import classnames from "classnames";
import Style from "./index.module.css";
import components from 'config/components'
import { Provider, connect } from 'react-redux'
import { store } from 'store'
import { UseComponentsType } from 'store/type'
import Storage from 'utils/store'
import Operate from 'components/common/operate'

let id = 0

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
  const render = function(type: string, target: HTMLDivElement, query: object, name: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const source = await components[type]()
        const Com = source[type]
        const div = document.createElement('div')

        target.append(div)
        ReactDOM.render(
          // 为了能够在 /components/common/chart/components/dynamicChart 使用 redux
          <Provider store={store} >
            <Operate>
              <Com {...query} name={name} />
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
    // 阻止默认事件
    event.preventDefault();
    /**
     * 暂时没用到，换了思路写
     * 之前是用 innerHTML 的思路、但事件失效
     * 后采用复用组件的思路
     */
    let {type, data, query} = JSON.parse(event.dataTransfer.getData("custom/drag"));
    event.dataTransfer.clearData();
    const name = `${type}${++id}`

    // 背景处理
    if (type === 'BgImg') {
      const parser = new DOMParser()
      const doc = parser.parseFromString(data, "text/html")
      const imgEl = doc.body.children[0] as HTMLImageElement
      addUseComponents({
        name,
        type,
        css: Object.create(null),
        text: imgEl.src,
        query
      })
      ;(event.target as HTMLElement).style.cssText = `background: url(${imgEl.src}) no-repeat center / cover;`
      return
    }
    
    addUseComponents({
      name,
      type,
      css: Object.create(null),
      text: '',
      query
    })
    console.log(props, 'props')
    await render(type, event.target as HTMLDivElement, query, name)
  }, [addUseComponents, props]);

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
        const {type, name, query, text} = useComponents[index]

        if (type === 'BgImg') {
          target.style.cssText = `background: url(${text}) no-repeat center / cover;`
          index++
          continue
        }

        await render(type, target, query, name)
        index++
      }
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={classnames(Style["editor-wrap"])}>
      <Operate>
        <div
          ref={el => editorMain.current = el}
          className={classnames(Style["editor-main"])}
          style={{
            width: w,
            minHeight: h - 50,
          }}
          onDrop={handleDrop}
          onDragOver={(event) => {
            event.preventDefault();
          }}
        ></div>
      </Operate>
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

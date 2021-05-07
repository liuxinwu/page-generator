import React, { memo, useCallback } from "react";
import ReactDOM from 'react-dom'
import classnames from "classnames";
import Style from "./index.module.css";
import components from 'config/components'
import { Provider, connect } from 'react-redux'
import { store } from 'store'

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
    }
  }
}

const Editor = connect(mapState, mapDispatch)(function(props: {
  equipment: {
    name: string;
    size: {
      w: number;
      h: number;
    };
  };
}) {

  const handleDrop = useCallback((event: React.DragEvent) => {
    // 阻止默认事件
    event.preventDefault();
    /**
     * 暂时没用到，换了思路写
     * 之前是用 innerHTML 的思路、但事件失效
     * 后采用复用组件的思路
     */
    let {type, data, query} = JSON.parse(event.dataTransfer.getData("custom/drag"));
    event.dataTransfer.clearData();

    // 背景处理
    if (type === 'BgImg') {
      const parser = new DOMParser()
      const doc = parser.parseFromString(data, "text/html")
      const imgEl = doc.body.children[0] as HTMLImageElement

      ;(event.target as HTMLElement).style.cssText = `background: url(${imgEl.src}) no-repeat center / cover;`
      return
    }
    
    const source = components[type]()
    const name = `${type}${++id}`
    props['addUseComponents']({
      type: 'ADD_USE_COMPONENTS',
      value: {
        [name]: {
          type,
          css: {},
          text: ''
        }
      }
    })
    console.log(props, 'props')
    
    source.then((_: any) => {
      const Com = _[type]
      const div = document.createElement('div')

      ;(event.target as HTMLElement).append(div)
      ReactDOM.render(
        // 为了能够在 /components/common/chart/components/dynamicChart 使用 redux
        <Provider store={store} >
          <Com {...query} name={name} />
        </Provider>,
        div
      )
    })

    // // 去除可拖拽属性
    // data = data.replace('draggable="true"', "");
    // // 去除可移动手势样式
    // data = data.replace(/([a-zA-Z|_]+cursor-move[a-zA-Z|_|-]+)/, '')
    // // 添加可以编写属性
    // const reg = /(^<p)|(^<div)|(^<h\d)]/
    // if (reg.test(data)) {
    //   data = data.replace(reg, (_: any) => {
    //     return `${_} contentEditable`
    //   })
    // }

    // const DATA_TYPE = data.match(/data-type="([a-zA-Z]*)"/) || []
    // if (DATA_TYPE[1] === 'bg') {
    //   const parser = new DOMParser()
    //   const doc = parser.parseFromString(data, "text/html")
    //   const imgEl = doc.body.children[0] as HTMLImageElement
    //   ;(event.target as HTMLElement).style.cssText = `background: url(${imgEl.src}) no-repeat center / cover;`
    //   return
    // }

    // const parser = new DOMParser()
    // let chartId: string = ''
    // let chartType = ''

    // const isChart = data.includes('canvas')
    // if(isChart) {
    //   // 去除图表类型
    //   chartType = (DATA_TYPE && DATA_TYPE[1]) || ''
    //   chartId = `chart${id++}`
    //   data = `<div id="${chartId}" style="height: 200px;"></div>`
    // } 
    // const doc = parser.parseFromString(data, "text/html")

    // const child = doc.body.children[0]
    // ;(event.target as HTMLElement).append(child)
    // // 绘制图标
    // if(isChart) {
    //   dynamicChart.draw(chartId, chartType)
    // }

    // (event.target as HTMLElement).innerHTML += data;
  }, [props]);

  const { w, h } = props.equipment.size;

  return (
    <div className={classnames(Style["editor-wrap"])}>
      <div
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

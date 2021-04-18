import React, { memo, useCallback } from "react";
import classnames from "classnames";
import Style from "./index.module.css";
import { useDynamicChart } from './useDynamicChart'

let id = 0

function Editor(props: {
  equipment: {
    name: string;
    size: {
      w: number;
      h: number;
    };
  };
}) {
  const dynamicChart = useDynamicChart()

  const handleDrop = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    let data = event.dataTransfer.getData("text/html");
    // 去除可拖拽属性
    data = data.replace('draggable="true"', "");
    // 去除可移动手势样式
    data = data.replace(/([a-zA-Z|_]+el-move[a-zA-Z|_|-]+)/, '')
    // 添加可以编写属性
    const reg = /^<p|(div)|(h\d)/
    if (reg.test(data)) {
      data = data.replace(reg, (_) => {
        return `${_} contentEditable`
      })
    }

    const parser = new DOMParser()
    let chartId: string = ''
    let chartType = ''

    const isChart = data.includes('canvas')
    console.log(data)
    if(isChart) {
      // 去除图表类型
      const result = data.match(/data-type="([a-zA-Z]*)"/)
      chartType = (result && result[1]) || ''
      chartId = `chart${id++}`
      data = `<div id="${chartId}" style="height: 200px;"></div>`
    } 
    const doc = parser.parseFromString(data, "text/html")

    const child = doc.body.children[0]
    ;(event.target as HTMLElement).append(child)
    // 绘制图标
    if(isChart) {
      dynamicChart.draw(chartId, chartType)
    }

    // (event.target as HTMLElement).innerHTML += data;
  }, [dynamicChart]);

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
}

export default memo(Editor, (props, preProps) => {
  return props.equipment.name === preProps.equipment.name;
});

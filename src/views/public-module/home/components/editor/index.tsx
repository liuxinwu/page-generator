import React, { memo, useCallback } from "react";
import classnames from "classnames";
import Style from "./index.module.css";

function Editor(props: {
  equipment: {
    name: string;
    size: {
      w: number;
      h: number;
    };
  };
}) {
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

    (event.target as HTMLElement).innerHTML += data;
  }, []);

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

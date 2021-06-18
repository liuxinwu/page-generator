import React, { useState, useEffect, useMemo, useRef } from "react";
import classnames from "classnames";
import Style from "./index.module.css";
import useMouseEvent from "hooks/useMouseEvent";
import { connect } from "react-redux";
import { StateType, UseComponentsType, ActionType } from "store/type";

const ACTIVE_STYLE = "border: 1px dashed rgba(255, 69, 85, .8);";
const UN_ACTIVE_STYLE = "border: 0;";
const mapState = (state: StateType) => ({
  useComponents: state.useComponents,
});
const mapDispatch = (dispath: any) => ({
  changeUseComponents: (val: ActionType<UseComponentsType>) => dispath(val),
});
interface ParentType extends HTMLDivElement {
  isRoot?: boolean | undefined;
  name?: string;
}

/**
 * 1. 绑定双击事件
 * 2. 添加一些操作功能（拖拽改大小、拖拽改位置、取消操作）
 */
const Operate = connect(
  mapState,
  mapDispatch
)(
  React.memo(
    function ({
      children,
      currentEl: parent,
      name,
      changeUseComponents,
    }: React.PropsWithChildren<{
      name: string;
      children?: React.ReactNode;
      currentEl?: ParentType | string;
      changeUseComponents: (val: ActionType<UseComponentsType>) => void;
    }>) {
      // 当前操作的元素
      let el = useRef<ParentType>()
      
      // 是否显示操作功能组件
      const [visible, setVisible] = useState(false);
      
      // 双击事件
      const handleDoubleClick = (e: any) => {
        console.log('do')
        let currentEl = el.current
        if (!currentEl?.isRoot) {
          currentEl!.style.cssText += ACTIVE_STYLE;
        }

        // 文本类型时添加可编辑属性
        if (currentEl?.name?.startsWith('text')) {
          const firstChild = currentEl.firstChild as HTMLElement
          firstChild && (firstChild.contentEditable = 'true')
        }

        setVisible(true);
        e && e.preventDefault();
        e && e.stopPropagation();
      }
      
      // 取消事件
      const handleCancle = (e: React.MouseEvent) => {
        let currentEl = el.current
        if (!currentEl) return;
        currentEl!.style.cssText += `${UN_ACTIVE_STYLE}`;
        setVisible(false);

        // 文本类型时去除可编辑属性
        if (currentEl.name?.startsWith('text')) {
          const firstChild = currentEl.firstChild as HTMLElement
          firstChild && (firstChild.contentEditable = 'false')
        }
        // 阻止原生的事件冒泡
        e.nativeEvent.stopImmediatePropagation()
        // 阻止 React 合成事件的冒泡
        e.stopPropagation();
      };
      
      // 渲染操作功能组件
      const renderChildren = useMemo(() => {
        let currentEl = el.current
        return (
          (visible && (
            <div className={Style["drag-icon-wrap"]}>
              <i
                className={classnames(
                  "iconfont",
                  "icon-quxiao",
                  Style["drag-cancel-icon"]
                )}
                onClick={handleCancle}
              />
              {(!currentEl?.isRoot && (
                <DragPositionIcon
                  currentEl={currentEl}
                  changeUseComponents={changeUseComponents}
                />
              )) ||
                null}
              <DragSizeIcon
                currentEl={currentEl}
                changeUseComponents={changeUseComponents}
              />
            </div>
          )) ||
          null
        );
      }, [visible, changeUseComponents]);

      // 设置根元素
      useEffect(() => {
        if (!parent) return;
        if (typeof parent === "string") {
          const _currentEl = document.querySelector(`#${parent}`) as ParentType;
          // 标志是否是根元素
          _currentEl!.isRoot = true;
          _currentEl!.name = name;
          el.current = _currentEl;
        } else {
          parent.name = name;
          el.current = parent;
        }

        const currentEl = el.current
        // 自动触发一次
        handleDoubleClick(null)
        currentEl?.addEventListener("click", handleDoubleClick);

        return () => {
          currentEl?.removeEventListener("click", handleDoubleClick);
        };
      }, [parent, name]);

      return (
        <>
          {children}
          {renderChildren}
        </>
      );
    },
    (prevProps, nextProps) => {
      return true;
    }
  )
);
export default Operate;

/**
 * 拖拽改大小
 * @param param0
 */
function DragSizeIcon({
  currentEl,
  changeUseComponents,
}: {
  currentEl: ParentType | undefined;
  changeUseComponents: (val: ActionType<UseComponentsType>) => void;
}) {
  const { moveOffset, handleMouseDown } = useMouseEvent();

  useEffect(() => {
    if (currentEl === undefined) return;

    // 在没有明确设置宽高的情况下 这样是获取不到的
    // const width = parseInt(parent.style.width) || 0
    // const height = parseInt(parent.style.height) || 0
    const { offsetWidth, offsetHeight } = currentEl;
    const width = offsetWidth + moveOffset.x;
    const height = offsetHeight + moveOffset.y;
    const cssText = (currentEl.style.cssText += currentEl.isRoot
      ? `height: ${height}px;`
      : `width: ${width}px;height: ${height}px;`);

    if (currentEl.isRoot) {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      document.body.scrollTop = document.documentElement.scrollTop =
        scrollTop + moveOffset.y;
    }
    changeUseComponents({
      type: "EDIT_USE_COMPONENTS",
      value: {
        name: currentEl.name as string,
        css: cssText + UN_ACTIVE_STYLE,
      },
    });
  }, [currentEl, moveOffset, changeUseComponents]);

  return (
    <i
      className={classnames(
        "iconfont",
        "icon-zhankaiduijiaoxian2",
        Style["drag-size-icon"]
      )}
      onMouseDown={handleMouseDown}
    />
  );
}

/**
 * 拖拽改位置
 * @param param0
 */
function DragPositionIcon({
  currentEl,
  changeUseComponents,
}: {
  currentEl: ParentType | undefined;
  changeUseComponents: (val: ActionType<UseComponentsType>) => void;
}) {
  const { moveOffset, handleMouseDown } = useMouseEvent();

  useEffect(() => {
    if (currentEl === undefined) return;

    let left = parseInt(currentEl.style.left) || 0;
    let top = parseInt(currentEl.style.top) || 0;
    left += moveOffset.x;
    top += moveOffset.y;
    const cssText =
      (currentEl.style.cssText += `left: ${left}px;top: ${top}px;`);
    changeUseComponents({
      type: "EDIT_USE_COMPONENTS",
      value: {
        name: currentEl.name as string,
        css: cssText + UN_ACTIVE_STYLE,
      },
    });
  }, [currentEl, moveOffset, changeUseComponents]);

  return (
    <i
      className={classnames(
        "iconfont",
        "icon-tuodong",
        Style["drag-position-icon"]
      )}
      onMouseDown={handleMouseDown}
    />
  );
}

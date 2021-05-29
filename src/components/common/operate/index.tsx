import React, { useState, useEffect, useCallback, useMemo } from "react";
import { doubleClick } from "utils/dom";
import classnames from "classnames";
import Style from "./index.module.css";
import useMouseEvent from "hooks/useMouseEvent";
import { connect } from "react-redux";
import { StateType, UseComponentsType, ActionType } from "store/type";

const BOX_SHADOW_ACTIVE = "box-shadow: 0px 0px 3px 3px rgba(255, 69, 85, .8);";
const BOX_SHADOW_NONE = "box-shadow: none;";
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
      isAdd = true,
      changeUseComponents,
    }: React.PropsWithChildren<{
      name: string;
      children?: React.ReactNode;
      currentEl?: ParentType | string;
      isAdd?: boolean;
      changeUseComponents: (val: ActionType<UseComponentsType>) => void;
    }>) {
      // 当前操作的元素
      const [currentEl, setCurrentEl] = useState<ParentType>();
      
      // 是否显示操作功能组件
      const [visible, setVisible] = useState(false);
      
      // 双击事件
      const _doubleClick = doubleClick((e: any) => {
        if (!currentEl?.isRoot) {
          currentEl!.style.cssText += BOX_SHADOW_ACTIVE;
        }

        // 文本类型时添加可编辑属性
        if (currentEl?.name?.startsWith('text')) {
          const firstChild = currentEl.firstChild as HTMLElement
          firstChild && (firstChild.contentEditable = 'true')
        }

        setVisible(true);
        e.preventDefault();
        e.stopPropagation();
      }, 500);
      const handleDoubleClick = useCallback(_doubleClick, [_doubleClick]);
      
      // 取消事件
      const handleCancle = useCallback(() => {
        if (!currentEl) return;
        currentEl!.style.cssText += `${BOX_SHADOW_NONE}`;
        setVisible(false);

        // 文本类型时去除可编辑属性
        if (currentEl.name?.startsWith('text')) {
          const firstChild = currentEl.firstChild as HTMLElement
          firstChild && (firstChild.contentEditable = 'false')
        }
      }, [currentEl]);
      
      // 渲染操作功能组件
      const renderChildren = useMemo(() => {
        return (
          (visible && (
            <div className={Style["drag-icon-wrap"]}>
              <i
                className={classnames(
                  "iconfont",
                  "icon-quxiao",
                  Style["drag-cancel-icon"]
                )}
                onClick={() => handleCancle()}
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
      }, [visible, currentEl, handleCancle, changeUseComponents]);

      // 给元素绑定双击事件
      useEffect(() => {
        currentEl?.addEventListener("click", handleDoubleClick);

        return () => {
          currentEl?.removeEventListener("click", handleDoubleClick);
        };
      }, [handleDoubleClick, currentEl]);

      // 设置根元素
      useEffect(() => {
        if (!parent) return;
        if (typeof parent === "string") {
          const currentEl = document.querySelector(`#${parent}`) as ParentType;
          // 标志是否是根元素
          currentEl!.isRoot = true;
          currentEl!.name = name;
          setCurrentEl(currentEl);
          return;
        }

        parent.name = name;
        setCurrentEl(parent);
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
        css: cssText + BOX_SHADOW_NONE,
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
        css: cssText + BOX_SHADOW_NONE,
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

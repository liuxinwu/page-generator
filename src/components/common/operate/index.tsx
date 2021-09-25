import { useState, useEffect, useRef, useCallback } from 'react'
import Style from './index.module.css'
import useMouseEvent from 'hooks/useMouseEvent'
import { connect } from 'react-redux'
import {
  StateType,
  UseComponentsType,
  ActionType,
  ActiveComponentType,
} from 'store/type'
import classnames from 'classnames'

const mapState = (state: StateType) => ({
  useComponents: state.useComponents,
})
const mapDispatch = (dispatch: any) => ({
  changeUseComponents: (val: ActionType<UseComponentsType>) => dispatch(val),
  replaceActiveComponent: (value: ActiveComponentType) => {
    dispatch({
      type: 'REPLACE_ACTIVE_COMPONENTS',
      value,
    })
  },
})
interface ParentType extends HTMLDivElement {
  isRoot?: boolean | undefined
  name?: string
}

const activityDomMap = new Map<string, Function>()

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
      replaceActiveComponent,
      ...props
    }: React.PropsWithChildren<{
      name: string
      children?: React.ReactNode
      currentEl?: ParentType | string
      changeUseComponents: (val: ActionType<UseComponentsType>) => void
      replaceActiveComponent: (val: ActiveComponentType) => void
    }>) {
      // 当前操作的元素
      const el = useRef<ParentType>()
      const { moveOffset, handleMouseDown } = useMouseEvent()

      // 是否显示操作功能组件
      const [visible, setVisible] = useState(false)

      // 元素聚焦事件
      const handleFocus = useCallback(
        (e: MouseEvent) => {
          const currentEl = el.current
          setVisible(true)
          e.stopPropagation()

          replaceActiveComponent({ name, dom: currentEl })
          // 去除其它元素的聚焦状态
          activityDomMap.forEach((blur, _name) => name !== _name && blur())
        },
        [name, replaceActiveComponent]
      )

      // 元素失焦事件
      function handleBlur() {
        setVisible(false)
      }

      // 获取元素、并标识元素类型
      // 默认聚焦
      // 事件监听
      useEffect(() => {
        if (!parent) return
        if (typeof parent === 'string') {
          const _currentEl = document.querySelector(`#${parent}`) as ParentType
          // 标志是否是根元素
          _currentEl!.isRoot = true
          _currentEl!.name = name
          el.current = _currentEl
        } else {
          parent.name = name
          el.current = parent
        }

        const currentEl = el.current
        activityDomMap.set(name, handleBlur)

        currentEl.addEventListener('click', handleFocus)
        !currentEl.isRoot &&
          currentEl.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('click', handleBlur)

        return () => {
          currentEl.removeEventListener('click', handleFocus)
          !currentEl.isRoot &&
            currentEl.removeEventListener('mousedown', handleMouseDown)
          window.removeEventListener('click', handleBlur)
        }
      }, [parent, name, handleMouseDown, handleFocus])

      // 拖拽改变位置
      useEffect(() => {
        const currentEl = el.current
        if (currentEl === undefined) return

        let left = parseInt(currentEl.style.left) || 0
        let top = parseInt(currentEl.style.top) || 0
        left += moveOffset.x
        top += moveOffset.y
        const cssText =
          (currentEl.style.cssText += `left: ${left}px;top: ${top}px;`)
        changeUseComponents({
          type: 'EDIT_USE_COMPONENTS',
          value: {
            name: currentEl.name as string,
            css: cssText,
          },
        })
      }, [moveOffset, changeUseComponents])

      return (
        <>
          {children}
          {visible && (
            <>
              <DragSizeIcon
                currentEl={el.current}
                changeUseComponents={changeUseComponents}
              />
            </>
          )}

          <div
            className={'tip_line'}
            style={{ display: visible ? 'block' : 'none' }}
          >
            <span className={classnames(Style.line, Style.top_line)}></span>
            <span className={classnames(Style.line, Style.right_line)}></span>
            <span className={classnames(Style.line, Style.bottom_line)}></span>
            <span className={classnames(Style.line, Style.left_line)}></span>
          </div>
        </>
      )
    },
    (prevProps, nextProps) => {
      return true
    }
  )
)
export default Operate

/**
 * 拖拽改大小
 * @param param0
 */
function DragSizeIcon({
  currentEl,
  changeUseComponents,
}: {
  currentEl: ParentType | undefined
  changeUseComponents: (val: ActionType<UseComponentsType>) => void
}) {
  const { moveOffset, handleMouseDown } = useMouseEvent()

  useEffect(() => {
    if (currentEl === undefined) return

    // 在没有明确设置宽高的情况下 这样是获取不到的
    // const width = parseInt(parent.style.width) || 0
    // const height = parseInt(parent.style.height) || 0
    const { offsetWidth, offsetHeight } = currentEl
    const width = offsetWidth + moveOffset.x
    const height = offsetHeight + moveOffset.y
    const cssText = (currentEl.style.cssText += currentEl.isRoot
      ? `height: ${height}px;`
      : `width: ${width}px;height: ${height}px;`)

    if (currentEl.isRoot) {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop
      document.body.scrollTop = document.documentElement.scrollTop =
        scrollTop + moveOffset.y
    }
    changeUseComponents({
      type: 'EDIT_USE_COMPONENTS',
      value: {
        name: currentEl.name as string,
        css: cssText,
      },
    })
  }, [currentEl, moveOffset, changeUseComponents])

  return (
    <i
      className={Style['drag-size-icon']}
      onMouseDown={(e) => {
        e.nativeEvent.stopImmediatePropagation()
        e.nativeEvent.preventDefault()
        handleMouseDown(e.nativeEvent)
      }}
    />
  )
}

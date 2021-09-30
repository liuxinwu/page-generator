import { useState, useEffect, useRef, useCallback } from 'react'
import Style from './index.module.css'
import useMouseEvent from 'hooks/useMouseEvent'
import { useDispatch } from 'react-redux'
import classnames from 'classnames'

interface ParentType extends HTMLDivElement {
  isRoot?: boolean | undefined
  name?: string
}

// 活动的 dom
const activityDomMap = new Map<string, Function>()

/**
 * 1. 绑定双击事件
 * 2. 添加一些操作功能（拖拽改大小、拖拽改位置、取消操作）
 */
const Operate = React.memo(
  function ({
    children,
    currentEl: parent,
    name,
  }: React.PropsWithChildren<{
    name: string
    children?: React.ReactNode
    currentEl?: ParentType | string
  }>) {
    // 当前操作的元素
    const el = useRef<ParentType>()
    const { moveOffset, handleMouseDown } = useMouseEvent()
    const dispatch = useDispatch()

    // 是否显示操作功能组件
    const [visible, setVisible] = useState(false)

    // 元素聚焦事件
    const handleFocus = useCallback(
      (e: MouseEvent) => {
        const currentEl = el.current
        setVisible(true)
        e.stopPropagation()

        name !== 'root' && dispatch({
          type: 'REPLACE_ACTIVE_COMPONENTS',
          value: { name, dom: currentEl }
        })
        // 去除其它元素的聚焦状态
        activityDomMap.forEach((blur, _name) => name !== _name && blur())
      },
      [name, dispatch]
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
      if (currentEl.isRoot) return

      // 通过修改 translate 来改变位置
      // 替换对 left、top 的修改、避免不必要的回流与重绘
      const style = currentEl.style
      const { x, y } = moveOffset
      const [ , , tLeft = 0, tTop = 0] = style.transform?.match(/((-{0,1}\d+px), (-{0,1}\d+px))/) ?? []
      style.transform = `translate(${parseInt(`${tLeft}`) + x}px, ${parseInt(`${tTop}`) + y}px)`
      const cssText = currentEl.style.cssText
      
      dispatch({
        type: 'EDIT_USE_COMPONENTS',
        value: {
          name: currentEl.name as string,
          css: cssText,
        },
      })
    }, [moveOffset, dispatch])

    return (
      <>
        {children}
        {visible && (
          <>
            <DragSizeIcon
              currentEl={el.current}
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
export default Operate

/**
 * 拖拽改大小
 * @param param0
 */
function DragSizeIcon({
  currentEl
}: {
  currentEl: ParentType | undefined
}) {
  const { moveOffset, handleMouseDown } = useMouseEvent()
  const dispatch = useDispatch()

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
    dispatch({
      type: 'EDIT_USE_COMPONENTS',
      value: {
        name: currentEl.name as string,
        css: cssText,
      },
    })
  }, [currentEl, moveOffset])

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

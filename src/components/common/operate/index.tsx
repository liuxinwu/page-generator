import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { doubleClick } from 'utils/dom'
import classnames from 'classnames'
import Style from './index.module.css'
import useMouseEvent from 'hooks/useMouseEvent'

let id = 0
let zIndex = 0
interface ParentType extends HTMLElement {
  isRoot?: boolean | undefined
}

/**
 * 拖拽改大小
 * @param param0 
 */
function DragSizeIcon({ parent }: { parent: ParentType | undefined }) {
  const mouseDownCallback = useCallback(() => {
    if (parent === undefined) return
    parent.style.cssText += `box-shadow: 0px 0px 3px 3px rgba(255, 69, 85, .8);`
  }, [parent])
  const mouseUpCallback = useCallback(() => {
    if (parent === undefined) return
    parent.style.cssText += `box-shadow: none;`
  }, [parent])
  const { moveOffset, handleMouseDown } = useMouseEvent({
    mouseDownCallback,
    mouseUpCallback
  })

  useEffect(() => {
    if (parent === undefined) return
    
    // 在没有明确设置宽高的情况下 这样是获取不到的
    // const width = parseInt(parent.style.width) || 0
    // const height = parseInt(parent.style.height) || 0
    const { offsetWidth, offsetHeight } = parent
    const width = offsetWidth + moveOffset.x
    const height = offsetHeight + moveOffset.y
    parent.style.cssText += `width: ${width}px;height: ${height}px;`

    if (parent.isRoot) {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      document.body.scrollTop = document.documentElement.scrollTop = scrollTop + moveOffset.y
    }
  }, [parent, moveOffset])

  return <i 
    className={classnames('iconfont', 'icon-zhankaiduijiaoxian2', Style['drag-size-icon'])}
    onMouseDown={handleMouseDown}
  />
}

/**
 * 拖拽改位置
 * @param param0 
 */
function DragPositionIcon({ parent }: { parent: ParentType | undefined }) {
  const { moveOffset, handleMouseDown } = useMouseEvent({})

  useEffect(() => {
    if (parent === undefined) return
    
    let left = parseInt(parent.style.left) || 0
    let top = parseInt(parent.style.top) || 0
    left += moveOffset.x
    top += moveOffset.y
    parent.style.cssText += `left: ${left}px;top: ${top}px;`
  }, [parent, moveOffset])

  return <i 
    className={classnames('iconfont', 'icon-tuodong', Style['drag-position-icon'])}
    onMouseDown={handleMouseDown}
  />
}

/**
 * 1. 绑定双击事件
 * 2. 添加一些操作功能（拖拽改大小、拖拽改位置、取消操作）
 */
const Operate = React.memo(function({
  type,
  children
}: React.PropsWithChildren<{
  type: string
  children?: React.ReactNode
}>) {
  const [visible, setVisible] = useState(false)
  const [parent, setParent] = useState<ParentType | undefined>()
  const click = doubleClick((e: any) => {
    const target = e.target
    let parentNode = target.parentNode

    if (type === 'root') {
      parentNode = target
      // 标志是否是跟元素
      parentNode.isRoot = true
    } else {
      let cssText = `position: absolute;z-index: ${++zIndex};background: #fff;`

      if (type === 'ChartWarp') {
        parentNode = parentNode.parentNode.parentNode
      } else {
        cssText += 'display:inline-block;'
      }
      const { top } = parentNode.getBoundingClientRect()

      parentNode.style.cssText += `${cssText};top: ${top - 116}px;`
    }
    setParent(parentNode)
    setVisible(true)
    e.preventDefault()
    e.stopPropagation()
  }, 500)
  const handleDoubleClick = useCallback(click, [click])
  const renderChildren = useMemo(() => {
    return visible && <div className={Style['drag-icon-wrap']}>
      <i 
        className={classnames('iconfont', 'icon-quxiao', Style['drag-cancel-icon'])}
        onClick={() => setVisible(false)}
      />
      { !parent?.isRoot && <DragPositionIcon parent={parent} /> }
      <DragSizeIcon parent={parent} />
    </div>
  }, [visible, parent])

  // 给元素绑定双击事件
  useEffect(() => {
    // let el = document.querySelector(`#operate_${id}`)
    // id 与图表有冲突 所以用自定义属性来处理
    let el = document.querySelector(`[data-id=operate_${id}`)
    el?.addEventListener('click', handleDoubleClick)

    return () => {
      el?.removeEventListener('click', handleDoubleClick)
      el = null
    }
  }, [handleDoubleClick])

  return <>
    {
      React.Children.map(children, child => {
        return React.cloneElement(child as any, {
          'data-id': `operate_${++id}`,
          children: renderChildren
        })
      })
    }
  </>
}, (prevProps, nextProps) => {
  return true
})

export default Operate
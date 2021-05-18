import React, { useState, useEffect, useCallback } from 'react'
import { doubleClick } from 'utils/dom'
import classnames from 'classnames'
import Style from './index.module.css'
import useMouseEvent from 'hooks/useMouseEvent'

let id = 0
const cssText = 'position: absolute;left: 20px;right: 20px;'

interface ParentType extends HTMLElement {
  isRoot?: boolean | undefined
}

/**
 * 拖拽改大小
 * @param param0 
 */
function DragSizeIcon({ visible, parent }: { visible: boolean, parent: ParentType | undefined }) {
  const mouseDownCallback = useCallback(() => {
    if (parent === undefined) return
    parent.style.cssText += `box-shadow: 0px 0px 3px 3px rgb(255, 69, 85, .8);`
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

  return <>
    { visible && <i 
      className={classnames('iconfont', 'icon-zhankaiduijiaoxian2', Style['drag-icon'])}
      onMouseDown={handleMouseDown}
    />
    }
  </>
}

/**
 * 1. 绑定双击事件
 * 2. 添加一些操作功能（拖拽改大小、拖拽改位置、取消操作）
 */
const Operate = React.memo(function({...props}) {
  const [visible, setVisible] = useState(false)
  const [parent, setParent] = useState<ParentType | undefined>()
  const click = doubleClick((e: any) => {
    const target = e.target
    let parentNode = e.target.parentNode

    if (target.className.includes('editor-main')) {
      parentNode = target
      // 标志是否是跟元素
      parentNode.isRoot = true
    } else {
      parentNode.style.cssText += cssText
    }
    setParent(parentNode)

    setVisible(true)
    e.preventDefault()
    e.stopPropagation()
  }, 500)
  const handleDoubleClick = useCallback(click, [click])

  // 给元素绑定双击事件
  useEffect(() => {
    let el = document.querySelector(`#operate_${id}`)
    el?.addEventListener('click', handleDoubleClick)

    return () => {
      el?.removeEventListener('click', handleDoubleClick)
      el = null
    }
  }, [handleDoubleClick])

  return <>
    {
      React.Children.map(props.children, child => {
        return React.cloneElement(child as any, {
          id: `operate_${++id}`,
          children: [<DragSizeIcon visible={visible} key="DragSizeIcon" parent={parent} />]
        })
      })
    }
  </>
}, (prevProps, nextProps) => {
  return true
})

export default Operate
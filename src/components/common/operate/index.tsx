import React, { useState, useEffect, useCallback } from 'react'
import { doubleClick } from 'utils/dom'
import classnames from 'classnames'
import Style from './index.module.css'
import useMouseEvent from 'hooks/useMouseEvent'

let id = 0
const cssText = 'position: absolute;left: 20px;right: 20px;'

function DragIcon({ visible, parent }: { visible: boolean, parent: HTMLElement | undefined }) {
  const { moveOffset, handleMouseDown } = useMouseEvent()

  useEffect(() => {
    if (parent === undefined) return
    // 在没有明确设置宽高的情况下 这样是获取不到的
    // const width = parseInt(parent.style.width) || 0
    // const height = parseInt(parent.style.height) || 0
    const { offsetWidth, offsetHeight } = parent
    const width = offsetWidth + moveOffset.x + moveOffset.offsetX
    const height = offsetHeight + moveOffset.y + moveOffset.offsetY
    parent.style.cssText += `width: ${width}px;height: ${height}px;`
  }, [parent, moveOffset])

  return <>
    { visible && <i 
      className={classnames('iconfont', 'icon-zhankaiduijiaoxian2', Style['drag-icon'])}
      onMouseDown={handleMouseDown}
    />
    }
  </>
}

const Operate = React.memo(function({...props}) {
  const [visible, setVisible] = useState(false)
  const [parent, setParent] = useState<HTMLElement | undefined>()
  const click = doubleClick((e: any) => {
    const target = e.target
    let parentNode = e.target.parentNode

    if (target.className.includes('editor-main')) {
      parentNode = target
    } else {
      parentNode.style.cssText += cssText
    }
    setParent(parentNode)

    setVisible(true)
    e.preventDefault()
    e.stopPropagation()
  }, 500)
  const handleDoubleClick = useCallback(click, [click])

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
          children: [<DragIcon visible={visible} key="DragIcon" parent={parent} />]
        })
      })
    }
  </>
}, (prevProps, nextProps) => {
  return true
})

export default Operate
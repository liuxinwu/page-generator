/**
 * 收集拖拽信息
 */

import React, { useEffect, useCallback, useRef, useState } from 'react'

/**
 * 收集拖拽信息
 * @param param0 
 * {
 *  mouseDownCallback,  按下执行的回调
 *  mouseUpCallback     抬起执行的回调
 * }
 */
export default function useMouseEvent(
  {
    mouseDownCallback,
    mouseUpCallback
  }: {
    mouseDownCallback?: Function,
    mouseUpCallback?: Function
  }
) {
  const movIng = useRef(false)
  // 每一次的移动距离
  const [moveOffset, setMoveOffset] = useState({
    x: 0,
    y: 0
  })
  // 移动的开始位置、鼠标距离目标元素的距离
  const coordinate = useRef({
    startX: 0,
    startY: 0,
    offsetX: 0,
    offsetY: 0,
    endX: 0,
    endY: 0
  })
  // 设置统一的位置信息
  const handleSet = useCallback((x, y, startX, startY) => {
    setMoveOffset({
      x,
      y
    })
    coordinate.current = Object.assign(coordinate.current, {
      startX,
      startY
    })
  }, [])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    movIng.current = true
    const { clientX, clientY, offsetX, offsetY } = e.nativeEvent
    coordinate.current = Object.assign(coordinate.current, {
      startX: clientX,
      startY: clientY,
      offsetX,
      offsetY
    })
    mouseDownCallback && mouseDownCallback()
  }, [mouseDownCallback])

  const handleMouseMove = useCallback((e) => {
    if (!movIng.current) return
    const { clientX, clientY } = e
    const { startX, startY } = coordinate.current
    const x = clientX - startX
    const y = clientY - startY
    handleSet(x, y, clientX, clientY)
  }, [handleSet])
  
  const handleMouseUp = useCallback((e) => {
    if (!movIng.current) return
    movIng.current = false
    const { clientX, clientY } = e
    handleSet(0, 0, clientX, clientY)
    mouseUpCallback && mouseUpCallback()
  }, [mouseUpCallback, handleSet])

  useEffect(() => {
    // 监听 window 的鼠标事件
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleMouseMove, handleMouseUp])

  return {
    handleMouseDown,
    moveOffset
  }
}
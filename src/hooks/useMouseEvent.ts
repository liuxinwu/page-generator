import React, { useEffect, useCallback, useRef, useState } from 'react'

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
  const [moveOffset, setMoveOffset] = useState({
    x: 0,
    y: 0
  })
  const coordinate = useRef({
    startX: 0,
    startY: 0,
    offsetX: 0,
    offsetY: 0,
    endX: 0,
    endY: 0
  })

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
    setMoveOffset({
      x,
      y
    })
    coordinate.current = Object.assign(coordinate.current, {
      startX: clientX,
      startY: clientY
    })
  }, [])
  
  const handleMouseUp = useCallback((e) => {
    if (!movIng.current) return
    movIng.current = false
    const { clientX, clientY } = e
    setMoveOffset({
      x: 0,
      y: 0
    })
    coordinate.current = Object.assign(coordinate.current, {
      startX: clientX,
      startY: clientY
    })
    mouseUpCallback && mouseUpCallback()
  }, [mouseUpCallback])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleMouseMove, handleMouseUp])

  return {
    handleMouseDown,
    handleMouseUp,
    moveOffset
  }
}
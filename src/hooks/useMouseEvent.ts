import React, { useEffect, useCallback, useRef, useState } from 'react'

export default function useMouseEvent() {
  const movIng = useRef(false)
  const [moveOffset, setMoveOffset] = useState({
    x: 0,
    y: 0,
    offsetX: 0,
    offsetY: 0
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
    const { startX, startY } = coordinate.current
    coordinate.current = Object.assign(coordinate.current, {
      startX: startX || clientX,
      startY: startY || clientY,
      offsetX,
      offsetY
    })
  }, [])

  const handleMouseMove = useCallback((e) => {
    if (!movIng.current) return
    const { clientX, clientY } = e
    const { startX, startY } = coordinate.current
    const x = clientX - startX
    const y = clientY - startY
    setMoveOffset({
      x,
      y,
      offsetX: moveOffset.offsetX,
      offsetY: moveOffset.offsetY
    })
    coordinate.current = Object.assign(coordinate.current, {
      startX: clientX,
      startY: clientY
    })
  }, [moveOffset])
  
  const handleMouseUp = useCallback((e) => {
    if (!movIng.current) return
    movIng.current = false
    const { clientX, clientY } = e
    const { startX, startY } = coordinate.current
    const x = clientX - startX
    const y = clientY - startY
    setMoveOffset({
      x: 0,
      y: 0,
      offsetX: x + moveOffset.offsetX,
      offsetY: y + moveOffset.offsetY
    })
    coordinate.current = Object.assign(coordinate.current, {
      startX: clientX,
      startY: clientY
    })
  }, [moveOffset])

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
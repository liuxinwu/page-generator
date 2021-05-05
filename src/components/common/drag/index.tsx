import React from 'react'
import Style from './index.module.css'

export const Drag = ({
  type,
  query = {},
  children
}: {
  type?: string
  query?: object,
  children: any
}) => {
  function handleDragStart(e: React.DragEvent) {
    const target = e.target as HTMLElement
    const dt = e.dataTransfer
    let data = ''

    if (target.getAttribute('id') === 'dragWrap') {
      data = target.innerHTML
    } else {
      data = target.outerHTML
    }
    
    dt!.setData('custom/drag', JSON.stringify({
      type,
      data,
      query: query || {}
    }))
  }

  return <div id="dragWrap" draggable="true" onDragStart={handleDragStart} className={Style['cursor-move']} >
    { children }
  </div>
}
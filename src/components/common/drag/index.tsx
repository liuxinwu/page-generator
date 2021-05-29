
import React from 'react'
import classnames from 'classnames'
import Style from './index.module.css'

export const Drag = ({
  componentName,
  status = 'menu',
  options = {},
  children
}: React.PropsWithChildren<{
  options?: {
    [index: string]: any
  }
  componentName?:string
  status?: string
}>) => {
  function handleDragStart(e: React.DragEvent) {
    const dt = e.dataTransfer
    
    dt!.setData('custom/drag', JSON.stringify({
      componentName,
      options
    }))
  }

  return (
    <>
      {
        status === 'menu' ? 
        React.Children.map(children as React.ReactElement, (child: React.ReactElement) => {
          const { props } = child
          const className = classnames(props.className, Style.cursor_move)
          return (
            React.cloneElement(child, {
              draggable: true,
              className,
              onDragStart: handleDragStart
            })
          )
        }) :
        children
      }
    </>
  )
}
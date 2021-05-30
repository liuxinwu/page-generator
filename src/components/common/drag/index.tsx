
import React from 'react'
import classnames from 'classnames'

export const Drag = ({
  componentName,
  status,
  options = {},
  children
}: React.PropsWithChildren<{
  options?: {
    [index: string]: any
  }
  componentName?:string
  status: string
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
        React.Children.map(children as React.ReactElement, (child: React.ReactElement) => {
          let newProps = {}
          const { props } = child
          const className = classnames(props.className, 'cursor_move')

          if (status === 'menu') {
            newProps ={
              draggable: true,
              className,
              onDragStart: handleDragStart
            }
          } else {
            // TODO
          }

          return (
            React.cloneElement(child, newProps)
          )
        })
      }
    </>
  )
}
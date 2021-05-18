import React, { createElement } from 'react'

export function H({ num, children, ...query }: { 
  num: number, 
  children?: React.FC
}) {
  const label = `h${num}`
  return <>
    {
      createElement(label, {...query}, `h${num}`)
    }
    {children}
  </>
}
import React, { createElement } from 'react'

export function H({ num, ...query }: { num: number }) {
  const label = `h${num}`
  return <>
    {
      createElement(label, {...query}, label)
    }
  </>
}
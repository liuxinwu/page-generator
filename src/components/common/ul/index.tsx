import React from 'react'
import classnames from 'classnames'
import Style from './index.module.css'

export function Ul({
  children,
  ...props
}: {
  children?: React.FC
}) {
  return <ul className={classnames(Style['hl-grid-wrap'])} {...props} >
  {
    new Array(4 * 1).fill(1).map((item, index) => <li key={index} className={classnames(Style['hl-grid-wrap-item'])} style={{
      "background": index % 2 === 0 ? '#eee' : '#666'
    }}></li>)
  }

  { children }
</ul>
}
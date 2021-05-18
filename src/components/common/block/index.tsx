import React from 'react'
import classnames from 'classnames'
import Style from './index.module.css'

export function Block({ children, ...props }: {
  children?: React.FC
}) {

  return <>
    <div className={classnames(Style['hl-block'])} {...props}>
      { children }
    </div>
  </>
}
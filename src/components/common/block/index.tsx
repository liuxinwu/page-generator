import React from 'react'
import classnames from 'classnames'
import Style from './index.module.css'

export function Block() {

  return <>
    <div className={classnames(Style['hl-block'])} ></div>
  </>
}
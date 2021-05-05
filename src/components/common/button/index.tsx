import React from 'react'
import classnames from 'classnames'
import Style from './index.module.css'

export function Button(props: any) {
  return <button type="button" className={classnames(Style['hl-btn'], props.class)} >login</button>
}
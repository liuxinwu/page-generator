import React from 'react'
import classnames from 'classnames'
import Style from './index.module.css'

export function Img({ src }: { src: string }) {
  return <img src={src} alt="" className={classnames(Style['hl-img'])} />
}
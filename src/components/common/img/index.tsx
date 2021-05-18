import React from 'react'
import classnames from 'classnames'
import Style from './index.module.css'

export function Img({ src, children, ...props }: { src: string,
  children?: React.FC
}) {
  return <>
    <img src={src} alt="" className={classnames(Style['hl-img'])} {...props} />
    { children }
  </>
}
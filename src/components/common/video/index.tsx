import React from 'react'
import classnames from 'classnames'
import Style from './index.module.css'

export function Video() {
  return <video className={classnames(Style['hl-video'])} controls>
    <source src='https://js2.a.yximgs.com/upic/2019/01/10/18/BMjAxOTAxMTAxODA1NDlfMzg4ODM5OF85ODQ5MzI0NDk1XzFfMw==_b_B71e68601386192a4d74fe11d66176e70.mp4'/>
  </video>
}
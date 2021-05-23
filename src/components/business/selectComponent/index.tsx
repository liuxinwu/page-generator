import {} from 'antd'
import { NavType } from 'components/business/nav'
import React from 'react'
import classnames from 'classnames'
import Style from './index.module.scss'

interface SelectComponentType {
  currentNav: {
    nav?: NavType
    index?: number
  }
}

export default function SelectComponent({ currentNav }: React.PropsWithChildren<SelectComponentType>) {
  const { nav, index } = currentNav
  return (
    <div className={classnames('animate__animated animate__fadeInLeftBig', Style.select_component)}>SelectComponent</div>
  )
}
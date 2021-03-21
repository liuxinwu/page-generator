import React from 'react'
import Style from './index.module.css'
import { equipmentList } from '../../data/equipment'

export default function EquipmentList(
  { hide, ...props }: {
    hide?: Function
    onSelect?: Function
    [index: string]: Function | string | number | undefined
  }
) {
  function handleSelect(event: React.MouseEvent<HTMLElement>) {
    hide && hide()
    const target = event.target as HTMLElement
    props.onSelect && props.onSelect(equipmentList[target.dataset.index!])
  }

  return <ul className={Style['equipment-list']} onClick={handleSelect}>
    {
      equipmentList.map((item, index) => (
        <li key={index} data-index={index} className={Style['equipment-item']}>{item.name}</li>
      ))
    }
  </ul>
}
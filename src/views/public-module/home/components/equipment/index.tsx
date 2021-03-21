import React, { useCallback, useEffect, useRef, useState } from 'react'
import classnames from 'classnames'
import Style from './index.module.css'
import FixedWrap from 'components/common/fixedWrap'
import EquipmentList from './list'

export default function Equipment(
  { setEquipment: parentSetEquipment }: {
    setEquipment: Function
  }
) {
  const [equipment, setEquipment] = useState(Object.create({
    name: 'IPhone6',
    size: {
      w: 375,
      h: 667
    }
  }))
  let fixed = useRef<any>(null)

  const handleSetEquipment = useCallback((equipment: object) => {
    setEquipment(equipment)
    parentSetEquipment(equipment)
  }, [parentSetEquipment])

  const handleSelect = useCallback((e) => {
    if (fixed.current) return fixed.current.show()

    fixed.current = FixedWrap(e, EquipmentList, { onSelect: handleSetEquipment })
  }, [handleSetEquipment])

  useEffect(() => {
    return () => {
      fixed.current && fixed.current.destory()
    }
  }, [])

  return <div className={classnames(Style['equipment-wrap'])}>
    <span className={classnames(Style['equipment-select'])} onClick={handleSelect}>{equipment.name} <i>^</i></span>
    <span className={classnames(Style['equipment-size'])}>{equipment.size.w}</span>
    <span>*</span>
    <span className={classnames(Style['equipment-size'])}>{equipment.size.h}</span>
  </div>
}
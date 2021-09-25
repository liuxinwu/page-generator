import { useCallback, useEffect, useRef, useState } from 'react'
import classnames from 'classnames'
import Style from './index.module.css'
import FixedWrap from 'components/common/fixed-wrap'
import EquipmentList from './list'
import { equipmentList } from 'config/equipment'
import { connect } from 'react-redux'

export default connect()(function Equipment({
  setEquipment: parentSetEquipment,
  ...props
}: {
  setEquipment: Function
}) {
  const [equipment, setEquipment] = useState(Object.create(equipmentList[1]))
  const fixed = useRef<any>(null)

  const handleSetEquipment = useCallback(
    (equipment: object) => {
      setEquipment(equipment)
      parentSetEquipment(equipment)
      props['dispatch']({
        type: 'SET_EQUIPMENT_LIST',
        value: { equipment },
      })
    },
    [parentSetEquipment, props]
  )

  const handleSelect = useCallback(
    (e) => {
      if (fixed.current) return fixed.current.show()

      fixed.current = FixedWrap(e, EquipmentList, {
        onSelect: handleSetEquipment,
      })
    },
    [handleSetEquipment]
  )

  useEffect(() => {
    return () => {
      fixed.current && fixed.current.destory()
    }
  }, [])

  return (
    <div className={classnames(Style['equipment-wrap'])}>
      <span
        className={classnames(Style['equipment-select'])}
        onClick={handleSelect}
      >
        {equipment.name} <i>^</i>
      </span>
      <span className={classnames(Style['equipment-size'])}>
        {equipment.size.w}
      </span>
      <span>*</span>
      <span className={classnames(Style['equipment-size'])}>
        {equipment.size.h}
      </span>
    </div>
  )
})

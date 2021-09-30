import { useCallback, useEffect, useRef, useState } from 'react'
import classnames from 'classnames'
import Style from './index.module.scss'
import FixedWrap from 'components/common/fixed-wrap'
import EquipmentList from './list'
import { equipmentList } from 'config/equipment'
import { useDispatch } from 'react-redux'
import { EquipmentType } from 'store/type'

export default function Equipment({
  setEquipment: parentSetEquipment
}: {
  setEquipment: Function
}) {
  const [equipment, setEquipment] = useState(Object.create(equipmentList[1]))
  const fixed = useRef<any>(null)
  let { current: equipmentWrap } = useRef<HTMLElement>(null)
  const dispatch = useDispatch()

  const handleSetEquipment = useCallback(
    (equipment: EquipmentType) => {
      setEquipment(equipment)
      parentSetEquipment(equipment)
      dispatch({
        type: 'SET_EQUIPMENT_LIST',
        value: equipment
      })
    },
    [parentSetEquipment, dispatch]
  )

  const handleSelect = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation()
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

  useEffect(() => {
    equipmentWrap?.addEventListener('click', handleSelect, false)
    
    return () => {
      equipmentWrap?.removeEventListener('click', handleSelect, false)
    }
  }, [handleSelect])

  return (
    // 问题点子元素上 onClick={handleSelect} 不会触发，只会触发父级通过 addEventListener 添加的事件
    // 需要了解 React 的事件原理
    <div ref={el => equipmentWrap = el} className={classnames(Style['equipment-wrap'])}>
      <i className={classnames('iconfont', 'icon-shezhi', Style['equipment-icon'])}></i>
    </div>
  )
}

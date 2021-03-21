import React, { useState } from 'react'
import Equipment from './components/equipment'
import Editor from './components/editor'
import Style from './index.module.css'
import { equipmentList } from './data/equipment'

export default function Home() {
  const [equipment, setEquipment] = useState(equipmentList[1])

  return <div className={Style['home-wrap']}>
    <Equipment setEquipment={setEquipment} />

    <Editor equipment={equipment}/>
  </div>
}
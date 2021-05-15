
import { equipmentList } from 'views/public-module/home/data/equipment'
import { StateType } from './type'
// import Storage from 'utils/store'

// let useComponents: Set<UseComponentsType>

// (async function getUseComponents() {
//   const storage = new Storage()
//   useComponents = new Set((await storage.getItem('useComponents') || []))
// })()

export const state: StateType = {
  equipment: equipmentList[1],
  useComponents: new Set()  // 为了保证添加的顺序 从而使用 Set 代替 Object
}

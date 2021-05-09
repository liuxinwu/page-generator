
import { equipmentList } from 'views/public-module/home/data/equipment'
import { StateType } from './type'

export const state: StateType = {
  equipment: equipmentList[1],
  useComponents: new Set(JSON.parse(localStorage.getItem('useComponents')|| '[]') || [])  // 为了保证添加的顺序 从而使用 Set 代替 Object
}

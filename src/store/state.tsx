import { equipmentList } from 'config/equipment'
import { StateType } from './type'

export const state: StateType = {
  equipment: equipmentList[1],
  useComponents: new Map(), // 为了保证添加的顺序 从而使用 Map 代替 Object
  activeComponent: {
    name: '',
    dom: undefined,
  },
}

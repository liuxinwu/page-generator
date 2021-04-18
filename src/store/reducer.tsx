import { state as defaultState } from './state'

export function reducer(state = defaultState, action: {
  type: string
  value: object
}) {
  switch(action.type) {
    case 'SET_EQUIPMENT_LIST':
      console.log('SET_EQUIPMENT_LIST')
      return {
        ...state,
        equipment: {
          name: 'Nexus 4',
          size: {
            w: 384,
            h: 640
          }
        }
      }
    default:
      return state
  }
}
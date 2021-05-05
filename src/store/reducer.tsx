import { state as defaultState } from './state'
import { StateType } from './type'

export function reducer(state = defaultState, action: {
  type: string
  value: StateType
}) {
  const value = action.value
  
  switch(action.type) {
    case 'SET_EQUIPMENT_LIST':
      return {
        ...state,
        ...value
      }
    default:
      return state
  }
}
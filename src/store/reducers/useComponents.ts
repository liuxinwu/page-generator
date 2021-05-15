import { state as defaultState } from '../state'
import { UseComponentsType } from '../type'

export default function useComponents(state = defaultState.useComponents, action: {
  type: string
  value: UseComponentsType[] | UseComponentsType
}) {
  const value = action.value
  
  switch(action.type) {
    case 'INIT_USE_COMPONENTS': {
      const newState = new Set(value as UseComponentsType[])
      return newState
    }
    case 'ADD_USE_COMPONENTS': {
      const newState = new Set(state)
      newState.add(value as UseComponentsType)
      return newState
    }
    default:
      return state
  }
}
import { state as defaultState } from '../state'
import { UseComponentsType } from '../type'

export default function useComponents(state = defaultState.useComponents, action: {
  type: string
  value: [string, UseComponentsType][] | UseComponentsType
}) {
  console.log(state, action, 'useComponents')
  switch(action.type) {
    case 'INIT_USE_COMPONENTS': {
      console.log(action, 'INIT_USE_COMPONENTS')
      const value = action.value as [string, UseComponentsType][]
      const newState = new Map(value)
      return newState
    }
    case 'ADD_USE_COMPONENTS': {
      console.log(action, 'ADD_USE_COMPONENTS')
      const newState = new Map(Array.from(state))
      const value = action.value as UseComponentsType
      newState.set(value.name, value)
      return newState
    }
    case 'EDIT_USE_COMPONENTS': {
      console.log(action, 'EDIT_USE_COMPONENTS')
      const newState = new Map(Array.from(state))
      const value = action.value as UseComponentsType
      const val = Object.assign({}, state.get(value.name), value)
      newState.set(val.name, val)
      return newState
    }
    default:
      return state
  }
}
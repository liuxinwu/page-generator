import { state as defaultState } from './state'

export function reducer(state = defaultState, action: {
  type: string
  value: object
}) {
  const value = action.value
  
  switch(action.type) {
    case 'SET_EQUIPMENT_LIST':
      return {
        ...state,
        ...value
      }
    case 'ADD_USE_COMPONENTS':
      return {
        ...state,
        useComponents: {
          ...state.useComponents,
          ...value
        }
      }
    default:
      return state
  }
}
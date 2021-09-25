import { state as defaultState } from '../state'

export default function equipment(
  state = defaultState.equipment,
  action: {
    type: string
    value: object
  }
) {
  const value = action.value

  switch (action.type) {
    case 'SET_EQUIPMENT_LIST':
      return {
        ...state,
        ...value,
      }
    default:
      return state
  }
}

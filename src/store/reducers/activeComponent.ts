import { state as defaultState } from '../state'
import { ActiveComponentType } from '../type'

export default function activeComponent(state = defaultState.activeComponent, action: {
  type: string
  value: ActiveComponentType
}) {
  
  switch(action.type) {
    case 'REPLACE_ACTIVE_COMPONENTS': {
      return action.value
    }
    default:
      return state
  }
}

import { combineReducers } from 'redux'

// 引入不同模块的 reducers
let reducers = {}
const reducersModule = require.context('./', false, /\.ts$/)
const excludes = ['./index.ts']
reducersModule.keys().forEach(_ => {
  if (!excludes.includes(_)) {
    const module = reducersModule(_)
    reducers[module.default.name] = module.default
  }
})

const reducer = combineReducers(reducers)

export default reducer

// import { state as defaultState } from '../state'

// export function reducer(state = defaultState, action: {
//   type: string
//   value: object
// }) {
//   const value = action.value
  
//   switch(action.type) {
//     case 'SET_EQUIPMENT_LIST':
//       return {
//         ...state,
//         ...value
//       }
//     case 'ADD_USE_COMPONENTS':
//       const { useComponents } = state
//       useComponents.add(value as any)
      
//       return {
//         ...state,
//         useComponents
//       }
//     default:
//       return state
//   }
// }
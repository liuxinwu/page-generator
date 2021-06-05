
import { combineReducers } from 'redux'

// 引入不同模块的 reducers
let reducers = {}
const reducersModule = require.context('./', false, /\.ts$/)
const excludes = ['./index.ts']
reducersModule.keys().forEach(_ => {
  if (!excludes.includes(_)) {
    const module = reducersModule(_)
    const [, name] = _.match(/\/(.*).ts$/) || []
    reducers[name] = module.default
    // 坑点 这里不能使用函数名，因为在编译之后函数名会被编译
    // 导致后面找不到
    // reducers[module.default.name] = module.default
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
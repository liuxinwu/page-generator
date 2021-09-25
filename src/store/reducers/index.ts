import { combineReducers } from "redux"

// 引入不同模块的 reducers
const reducers: { [x: string]: () => {} } = {}
const reducersModule = import.meta.globEager("./*.ts")
const excludes = ["./index.ts"]

for (const path in reducersModule) {
  if (!excludes.includes(path)) {
    const module = reducersModule[path]
    const [, name] = path.match(/\/(.*).ts$/) || []
    reducers[name] = module.default
    // 坑点 这里不能使用函数名，因为在编译之后函数名会被编译
    // 导致后面找不到
    // reducers[module.default.name] = module.default
  }
}
const reducer = combineReducers(reducers)

export default reducer

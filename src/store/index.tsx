import { createStore } from "redux"
import reducer from "./reducers"
// 安装调试工具 配合 chrome 的 Redux DevTools 插件使用
import { composeWithDevTools } from "redux-devtools-extension"

export const store = createStore(reducer, composeWithDevTools())

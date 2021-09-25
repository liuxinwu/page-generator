/**
 * 这种动态生成 api 的方式
 * 对 ts 类型检查不太友好
 * 暂时没有找到好的方式解决
 */

import { ApiMethods } from './api.type'

const api: ApiMethods = {}

// 加载所以有的 api 模块
const apiModule = import.meta.globEager('./*.api.ts')
Object.keys(apiModule).forEach((path: string) => {
  try {
    const key = path?.match(/\.\/([a-zA-Z]+)\./)?.[1] + 'Module'
    api[key] = apiModule[path].default
  } catch (error) {
    console.error(`生产 ${path} 模块的 api 失败`)
  }
})

export default api

const api: {
  [index: string]: any
} = {}

// 加载所以有的 api 模块
const apiModule = require.context('./', false, /\.api\.ts$/)
apiModule.keys().forEach(_ => {
  try {
    const key = _.match(/\.\/([a-zA-Z]+)\./)![1] + 'Module'
    api[key] = apiModule(_).default
  } catch (error) {
    console.error(`生产 ${_} 模块的 api 失败`)
  }
})

export default api
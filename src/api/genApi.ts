import api from "serve/requestInstance"
import { ApiType, ApiMethods, ApiMethod } from "./api.type"
import { AxiosResponse } from "axios"
import Cache from "cache/index"
const cache = new Cache()
const GET = "get"

export function genApi(targetModule: ApiType): ApiMethods {
  const module: ApiMethods = Object.create(null)

  Object.keys(targetModule).forEach((key: string) => {
    const { method, url } = targetModule[key]

    const methodBody: ApiMethod = async (config, customConfig) => {
      if (method === GET) {
        try {
          // 读缓存数据
          const result = await cache.get(url)
          return Promise.resolve(result) as Promise<AxiosResponse<T>>
        } catch (error) {
          console.error(error, "error")
          return api[method](url, config, customConfig)
        }
      }

      return api[method](url, config, customConfig)
    }

    module[key] = methodBody
  })

  return module
}

import api from 'serve/requestInstance'
import { ApiType, AxiosRequestConfig, AxiosResponse, CustomConfigType } from './api.type'
import Cache from 'cache'
const cache = new Cache()

export function genApi(targetModule: ApiType) {
  const module: { [index: string]: (config?: AxiosRequestConfig, customConfig?: CustomConfigType) => Promise<AxiosResponse> } = Object.create(null)

  Object.keys(targetModule).forEach((key: string) => {
    const { method, url } = targetModule[key]

    module[key] = async(config?: AxiosRequestConfig, customConfig?: CustomConfigType): Promise<any> => {
      if (method === 'get') {
        try {
          const result = await cache.get(url)
          return Promise.resolve(result)
        } catch (error) {
          console.error(error, 'error')
          return api[method](url, config, customConfig)
        }
      }

      return api[method](url, config, customConfig)
    }
  })

  return module
}
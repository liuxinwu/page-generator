import api from 'serve/requestInstance'
import { ApiType, AxiosRequestConfig, AxiosResponse, CustomConfigType } from './api.type'

export function genApi(targetModule: ApiType) {
  const module: { [index: string]: (config?: AxiosRequestConfig, customConfig?: CustomConfigType) => Promise<AxiosResponse> } = {}

  Object.keys(targetModule).forEach((key: string) => {
    const { method, url } = targetModule[key]

    module[key] = (config?: AxiosRequestConfig, customConfig?: CustomConfigType) => {
      return api[method](url, config, customConfig)
    }
  })

  return module
}
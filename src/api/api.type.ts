import { Method } from 'axios'

export type { AxiosRequestConfig, AxiosResponse } from 'axios'
export type { CustomConfigType } from 'serve/index.type'
export interface ApiType {
  [index: string]: {
    method: Method
    url: string
  }
}
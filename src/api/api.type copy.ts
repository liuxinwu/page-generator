type Method = "get" | "post" | "put" | "delete"

import { AxiosRequestConfig, AxiosResponse } from "axios"
import { CustomConfigType } from "serve/index.type"
export interface ApiType {
  [index: string]: {
    method: Method
    url: string
  }
}

export interface ApiMethods {
  [index: string]: ApiMethod
}

export type ApiMethod = <T>(
  config?: AxiosRequestConfig,
  customConfig?: CustomConfigType
) => Promise<AxiosResponse<T>>

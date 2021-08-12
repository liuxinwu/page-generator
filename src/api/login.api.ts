import { ApiType, AxiosRequestConfig, AxiosResponse, CustomConfigType } from './api.type'
import { genApi } from './genApi'

interface UserInfoType {
  id: number
  name: string
  age: number
}

const loginModule: ApiType = {
  loginIn: {
    method: 'get',
    url: 'api/loginIn'
  }
}

export default genApi(loginModule) as {
  loginIn: (config?: AxiosRequestConfig, customConfig?: CustomConfigType) => Promise<AxiosResponse<UserInfoType>> 
}
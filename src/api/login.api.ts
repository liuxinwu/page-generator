import { ApiType } from './api.type'
import { genApi } from './genApi'

const loginModule: ApiType = {
  loginIn: {
    method: 'get',
    url: 'loginIn'
  }
}

export default genApi(loginModule)
import { ApiType } from './api.type'
import { genApi } from './genApi'

const loginModule: ApiType = {
  loginIn: {
    method: 'get',
    url: '/api/loginIn'
  }
}

export default genApi(loginModule)
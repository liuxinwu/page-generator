
type CacheValue = object | Array<any> | string | number | Function

interface CacheType {
  [index: string]: CacheValue
}

class Cache {
  static instance: Cache
  cache: CacheType = Object.create(null)

  constructor() {
    if (Cache.instance) return Cache.instance

    Cache.instance  = this
    this.cache = {}
  }

  public get(url: string) {
    return this.listenError(() => {
      const value = this.cache[url]

      if (value === undefined) {
        throw Error('不存在该缓存')
      }

      return value
    })
  }

  public set(url: string, value: CacheValue) {
    return this.listenError(() => {
      return this.cache[url] = value
    })
  }

  public delete(url: string) {
    return this.listenError(() => {
      return delete this.cache[url]
    })
  }

  public clear(url: string) {
    return this.listenError(() => {
      return this.cache = Object.create(null)
    })
  }

  private listenError(cb: Function) {
    return new Promise((resolve, reject) => {
      try {
        resolve({
          code: 0,
          data: cb.call(this),
          msg: '读取缓存数据成功！'
        })
      } catch (error) {
        reject({
          code: -1,
          data: error,
          msg: '读取缓存数据出错了！'
        })
      }
    })
  }
}

export default Cache
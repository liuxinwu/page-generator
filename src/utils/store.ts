/**
 * 本地存储工具函数
 * 1. 支持命名空间
 *    const storage = new Storage('private')
 * 2. 支持任意数据类型
 *    storage.setItem('a', 1)
 *    storage.setItem('b', { value: 1 })
 * 3. 支持过期时间
 *    storage.setItem('b', { value: 1 }, 1 * 1000)
 *    过期时  storage.getItem('b')  -> ''
 */

import { typeOf } from "./typeOf"

type StorageVal = string | number | object | []

export default class Storage {
  nameSpace
  data: {
    [index: string]: {
      value: StorageVal
      expirationTime: number
      startTime: number
    }
  }

  /**
   * 初始化空间及内容
   * @param nameSpace 命名空间
   */
  constructor(nameSpace = "default") {
    // 命名空间
    this.nameSpace = `${nameSpace}Storage`
    // 初始化值并同步缓存里面的数据
    const data = localStorage.getItem(this.nameSpace) || "{}"
    this.data = JSON.parse(data) || Object.create(null)
  }

  /**
   * 设置缓存
   * @param key 键
   * @param value 值
   * @param expirationTime 过期时间
   * @param isRoot 是否是根缓存
   */
  public setItem(
    key: string,
    value: StorageVal,
    expirationTime = 0,
    isRoot = false
  ): Promise<void> {
    const { data } = this
    return new Promise((resolve, reject) => {
      try {
        if (!isRoot) {
          const tempVal = Object.create(null)
          tempVal.value = value
          tempVal.expirationTime = expirationTime
          tempVal.startTime = new Date().getTime()
          data[key] = tempVal
        }
        localStorage.setItem(this.nameSpace, this.typeTransform(data))
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * 获取缓存
   * @param key 键
   */
  public getItem<T>(key: string): Promise<T> {
    const { data } = this
    return new Promise((resolve, reject) => {
      try {
        const { value, expirationTime, startTime } = data[key] || {}
        const nowTime = new Date().getTime()

        if (nowTime - startTime > expirationTime && expirationTime > 0) {
          console.error("该缓存已过期")
          resolve("" as unknown as T)
          this.removeItem(key)
          return
        }

        resolve(value as unknown as T)
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * 删除缓存
   * @param key 键
   */
  public removeItem(key: string): Promise<void> {
    const { data } = this
    return new Promise(async (resovle, reject) => {
      try {
        delete data[key]
        await this.setRootStorage()
        resovle()
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * 清空命名空间缓存
   */
  public clear(): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        this.data = Object.create(null)
        await this.setRootStorage()
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * 设置命名空间缓存
   */
  private async setRootStorage() {
    return this.setItem("", "", 0, true)
  }

  /**
   * 数据类型转换
   * @param value 目标数据
   */
  private typeTransform(value: StorageVal): string {
    const { isObject, isArray } = typeOf
    if (isObject(value) || isArray(value)) {
      return (value = JSON.stringify(value))
    }

    return value.toString()
  }
}

/**
 * 类型判断的工具函数
 */

// 所有类型
const ALL_TYPE = [
  "String",
  "Number",
  "Boolean",
  "Undefined",
  "Null",
  "Object",
  "Array",
  "Function",
]

/**
 * 判断数据类型函数
 * @param source 需要判断的数据
 */
const typeOfFn = (source: any): string => {
  return Object.prototype.toString.call(source).slice(8, -1)
}

export const typeOf: {
  [index: string]: (source: any) => boolean
} = Object.create(null)

// 生成一系列的类型判断函数
ALL_TYPE.forEach((type) => {
  typeOf[`is${type}`] = (source: any) => {
    return typeOfFn(source) === type
  }
})

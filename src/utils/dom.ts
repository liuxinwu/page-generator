// 有关 Dom 操作的工具函数

/**
 * 双击事件
 * @param cb 回调函数
 * @param expire 过期事件
 * @returns
 */
export const doubleClick = (cb: Function, expire: number): any => {
  let count = 0
  let oldTime = 0

  function reset() {
    count = 0
    oldTime = 0
  }

  return (e: any) => {
    const now = new Date().getTime()

    ++count

    // 第一次
    if (count === 1) {
      oldTime = now
      return
    }

    // 过期
    const isExpire = now - oldTime < expire
    if (!isExpire) {
      reset()
      return
    }

    // 成功双击
    if (count >= 2) {
      cb(e)
      reset()
      return
    }
  }
}

export const hasClass = (el: HTMLElement, className: string): boolean => {
  if (!className) return false

  return el.className.includes(className)
}

/**
 * 给元素添加类名
 * @param el 元素
 * @param className 类名
 */
export const addClass = (el: HTMLElement, className: string): void => {
  if (!className) return
  if (hasClass(el, className)) return

  el.className += ` ${className}`
}

/**
 * 给元素移除类名
 * @param el 元素
 * @param className 类名
 */
export const removeClass = (el: HTMLElement, className: string): void => {
  if (!className) return
  if (!hasClass(el, className)) return

  el.className = el.className.replace(className, "").trim()
}

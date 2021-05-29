import { createElement, useCallback } from 'react'
import { ChildrenProps } from 'types/childrenProps'
import { Drag } from 'components/common/drag'
import classnames from 'classnames'
import Style from './index.module.scss'

enum Type {
  text = 1,
  smallTitle,
  subTitle,
  title,
  bigTitle,
  diversifiedTitle
}
const diversifiedText = <div key="diversifiedText">
  <span className={Style.select}>选中</span>
  文本可以修改
  <span className={Style.size}>大小</span>
  /
  <span className={Style.color}>颜色</span>
</div>

export const textConfig =  {
  text: {
    label: 'p',
    menuText: '点击添加文本',
    editorText: '双击修改当前文本',
    className: Style.default_text
  },
  smallTitle: {
    label: 'h4',
    menuText: '小标题',
    editorText: '双击修改小标题',
    className: Style.small_title
  },
  subTitle: {
    label: 'h3',
    menuText: '标题',
    editorText: '双击修改标题',
    className: Style.sub_title
  },
  title: {
    label: 'h2',
    menuText: '副标题',
    editorText: '双击修改副标题',
    className: Style.title
  },
  bigTitle: {
    label: 'h1',
    menuText: '大标题',
    editorText: '双击大标题',
    className: Style.big_title
  },
  diversifiedTitle: {
    label: 'div',
    menuText: diversifiedText,
    editorText: diversifiedText
  }
}

/**
 * 
 * @param name 组件标识
 * @param label 标签名称
 * @param type 类型 1 文本 2 小标题 3 副标题 4 标题 5 大标题 6 多元化文本
 * @param children 子组件
 * @returns 
 */
export default function Text({
  name,
  label,
  status = 'menu',
  type = 1,
  children,
}: ChildrenProps<{
  label?: string
  type?: number
}>) {

  const renderLabel = useCallback(() => {
    if (label) return label
    
    let newLabel = textConfig[Type[type]].label
    
    return newLabel
  }, [label, type])

  const renderChildren = useCallback(() => {
    let defalutValue = textConfig[Type[type]][`${status}Text`]
    
    return [defalutValue, children]
  }, [children, type, status])

  const getClassName = useCallback(() => {
    let className = textConfig[Type[type]].className || ''
    
    return (status === 'menu' && classnames(Style.text, className)) || classnames(className, 'text_anign_center')
  }, [type, status])

  return (
    <Drag status={status} componentName="text" options={{
      type
    }}>
    {
      createElement(
        renderLabel(),
        {
          name,
          className: getClassName()
        },
        renderChildren()
      )
    }
    </Drag>
  )
}
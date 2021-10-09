import { useState, createElement, useCallback, useEffect } from 'react'
import { ChildrenProps } from 'types/childrenProps'
import classnames from 'classnames'
import Style from './index.module.scss'
import { useDispatch } from 'react-redux'
import { doubleClick } from 'utils/dom'

enum Type {
  text = 1,
  smallTitle,
  subTitle,
  title,
  bigTitle,
  diversifiedTitle,
}
const diversifiedText = (
  <div key="diversifiedText">
    <span className={Style.select}>选中</span>
    文本可以修改
    <span className={Style.size}>大小</span>/
    <span className={Style.color}>颜色</span>
  </div>
)

export const textConfig = {
  text: {
    label: 'p',
    menuText: '点击添加文本',
    editorText: '双击修改当前文本',
    className: Style.default_text,
  },
  smallTitle: {
    label: 'h4',
    menuText: '小标题',
    editorText: '双击修改小标题',
    className: Style.small_title,
  },
  subTitle: {
    label: 'h3',
    menuText: '标题',
    editorText: '双击修改标题',
    className: Style.sub_title,
  },
  title: {
    label: 'h2',
    menuText: '副标题',
    editorText: '双击修改副标题',
    className: Style.title,
  },
  bigTitle: {
    label: 'h1',
    menuText: '大标题',
    editorText: '双击大标题',
    className: Style.big_title,
  },
  diversifiedTitle: {
    label: 'div',
    menuText: diversifiedText,
    editorText: diversifiedText,
  },
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
  ...options
}: ChildrenProps<{
  label?: string
  type?: number
}>) {
  const [isEdit, setIsEdit] = useState(false)
  const isEditorStatus = status === 'editor'
  const dispatch = useDispatch()

  const renderLabel = useCallback(() => {
    if (label) return label

    const newLabel = textConfig[Type[type]].label

    return newLabel
  }, [label, type])

  const renderChildren = useCallback(() => {
    if (isEditorStatus && children) return [children]

    const defalutValue = textConfig[Type[type]][`${status}Text`]
    return [defalutValue, children]
  }, [children, type, status, isEditorStatus])

  const getClassName = useCallback(() => {
    const className = textConfig[Type[type]].className || ''

    return (
      (status === 'menu' && classnames(Style.text, className, options['className'])) ||
      classnames(className, 'text_anign_center')
    )
  }, [type, status, options])

  const handleInput = (e: any) => {
    dispatch({
      type: 'EDIT_USE_COMPONENTS',
      value: {
        name,
        text: e.target.innerText,
      },
    })
  }

  const handleDoubleClick = useCallback(
    doubleClick((e: React.MouseEvent) => {
      setIsEdit(true)
    }, 300),
    []
  )

  useEffect(() => {
    function disableEdit() {
      setIsEdit(false)
    }
    window.addEventListener('click', disableEdit)

    return () => {
      window.removeEventListener('click', disableEdit)
    }
  }, [])

  return (
    createElement(
      renderLabel(),
      {
        name,
        onInput: isEditorStatus ? handleInput : () => {},
        onClick: handleDoubleClick,
        ...options,
        className: getClassName(),
        contentEditable: isEditorStatus && isEdit,
        suppressContentEditableWarning: true,
      },
      renderChildren()
    )
  )
}

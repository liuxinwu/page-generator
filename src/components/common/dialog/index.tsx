import { useEffect, memo, ReactChild, ReactNode } from 'react'
import ReactDOM from 'react-dom'
import Style from './index.module.css'

type Type = 'info' | 'success' | 'error' | 'confirm' | 'warning'
interface DialogType {
  visible: boolean
  closeDialog: Function
  children?: ReactChild
  title?: string
  cancleText?: string
  okText?: string
  type?: Type
  content?: ReactNode
}

function Dialog({
  visible,
  closeDialog,
  children,
  title,
  cancleText,
  okText,
  type = 'info',
  content,
}: DialogType) {
  useEffect(() => {})

  function handleCloseDialog() {
    closeDialog()
  }

  return visible ? (
    <div
      className={[Style['dialog-wrap'], Style['dialog-wrap-show']].join(' ')}
      onClick={handleCloseDialog}
    >
      <div
        className={Style['dialog-content']}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={Style['dialog-header']}>
          {type ? <strong>{type} </strong> : null}
          {title ? title : '提示信息'}
        </div>
        <div className={Style['dialog-main']}>
          {children} {content}
        </div>
        <div className={Style['dialog-footer']}>
          {cancleText ? <button>cancleText</button> : ''}
          {okText ? <button>okText</button> : ''}
        </div>
      </div>
    </div>
  ) : null
}

function areEqual(prevProps: DialogType, nextProps: DialogType) {
  /*
  如果把 nextProps 传入 render 方法的返回结果与
  将 prevProps 传入 render 方法的返回结果一致则返回 true，
  否则返回 false
  */
  return (
    prevProps.visible === nextProps.visible &&
    prevProps.content === nextProps.content
  )
}

function confing(config: any) {
  const div = document.createElement('div')
  document.body.appendChild(div)

  function render(config: any) {
    ReactDOM.render(
      <Dialog visible={true} closeDialog={distory} {...config} />,
      div
    )
  }

  function distory() {
    ReactDOM.unmountComponentAtNode(div)

    if (div.parentElement) {
      div.parentElement.removeChild(div)
    }
  }

  render(config)
}

export function info() {
  confing({
    okText: '关闭',
  })
}

export function success(config: any) {
  confing(config)
}

// memo 包裹 减少不必要的渲染
export default memo(Dialog, areEqual)

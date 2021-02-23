import React, { useEffect, memo, ReactChild } from 'react'
import ReactDOM from 'react-dom'
import Style from './index.module.css'
interface DialogType {
  visible: boolean
  closeDialog: Function
  children: ReactChild
}

function Dialog({ visible, closeDialog, children }: DialogType) {
  useEffect(() => {
    console.log('Dialog')
  })

  function handleCloseDialog() {
    closeDialog()
  }

  return visible
  ? <div className={Style['dialog-wrap']} onClick={handleCloseDialog}>{ children }</div>
  : null
}

function areEqual(prevProps: DialogType, nextProps: DialogType) {
  /*
  如果把 nextProps 传入 render 方法的返回结果与
  将 prevProps 传入 render 方法的返回结果一致则返回 true，
  否则返回 false
  */
 return prevProps.visible === nextProps.visible
}

export default memo(
  Dialog,
  areEqual
)

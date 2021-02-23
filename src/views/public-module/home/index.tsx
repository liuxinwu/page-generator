import React, { useState } from 'react'
import Dialog from 'components/common/dialog'

export default function Home() {
  const [visible, setVisible] = useState(false)
  const [num, setNum] = useState(0)

  function handleDialogVisible() {
    setVisible(!visible)
  }

  return <>
    <h1>home</h1>
    <Dialog visible={visible} closeDialog={handleDialogVisible} ><h2>dialog</h2></Dialog>
    <button onClick={handleDialogVisible}>handleDialogVisible</button>
    <br />
    {num}
    <button onClick={
      () => {
        setNum(num + 1)
      }
    }>add</button>
  </>
}
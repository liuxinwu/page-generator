import React, { useState, FormEvent, FunctionComponentElement } from 'react'
import Style from './index.module.css'

export const Form = (
  {
    children,
    ...props
  }: {
    children?: React.FC
  }
): FunctionComponentElement<any> => {
  const [form, setForm] = useState({
    username: 'Tome',
    phone: ''
  })

  function handleInput(e: any, key: string) {
    const { value } = e.target as any
    console.log(e.target)

    setForm({
      ...form,
      [key]: value
    })
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    console.log(form)
  }

  return <form className={Style['form-wrap']} onSubmit={handleSubmit} {...props}>
    <div className={Style['form-item']}>
      <label className={Style['form-item-label']} >姓名：</label>
      <div className={Style['form-item-value']}>
        <input className={Style['form-item-input']} type="text" placeholder="请输入姓名" value={form.username} onInput={e => handleInput(e, 'username')}/>
      </div>
    </div>
    <div className={Style['form-item']}>
      <label className={Style['form-item-label']} >电话号码：</label>
      <div className={Style['form-item-value']}>
        <input className={Style['form-item-input']} type="text" placeholder="请输入电话号码" value={form.phone} onInput={e => handleInput(e, 'phone')}/>
      </div>
    </div>
    <div className={Style['form-item']}>
      <button className={Style['form-item-submit']} >登录</button>
    </div>

    { children }
  </form>
}
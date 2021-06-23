import { useState } from 'react'
import Style from './index.module.scss'
import { Input } from 'antd';

const { TextArea } = Input;

export function TextConfig(defaultValue: {
  text: string
}) {
  const [data, setData] = useState(defaultValue)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: string) {
    console.log(e)
    setData({
      ...data,
      [key]: e.target.value
    })
  }

  return (
    <ul className={Style.list}>
      <li className={Style.item}>
        <span>内容：</span>
        <TextArea rows={4} onChange={(e) => handleChange(e, 'text')}></TextArea>
      </li>
      <li className={Style.item}>
        <span>背景图：</span>
        <Input type="url" onChange={(e) => handleChange(e, 'url')} placeholder="在线地址"></Input>
      </li>
      <li className={Style.item}>
      </li>
    </ul>
  )
}
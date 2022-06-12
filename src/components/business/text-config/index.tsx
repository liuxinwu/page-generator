import { useState } from 'react'
import Style from './index.module.scss'
import { Input } from 'antd'
import { upload } from 'qiniu-js'
import { useDispatch } from 'react-redux'

const { TextArea } = Input

export default function TextConfig({
  defaultValue,
  dom,
}: {
  defaultValue: { text: string; name: string }
  dom: HTMLDivElement
}) {
  const [data, setData] = useState(defaultValue)
  const dispatch = useDispatch()

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) {
    const value = e.target.value
    setData({
      ...data,
      [key]: value,
    })
    // 操作 dom 设置文本
    const el = dom.querySelector(`[name=${data.name}]`)
    el && (el.innerHTML = value)
    dispatch({
      type: 'EDIT_USE_COMPONENTS',
      value: {
        name: data.name,
        text: value,
      },
    })
  }

  function handleFile(e: any) {
    const file = e.target.files[0]
    console.log(file, upload)
    const token =
      'jFBcwwkYqxVrVSmNCUIr5z7Doh9w6jbaA5Sruqxb:n7tv7S7dPNOSJg3dTQKZUQN1X48=:eyJzY29wZSI6InBhZ2UtZ2VuZXJhdGUiLCJkZWFkbGluZSI6MTYyNTMwOTM4M30='
    const observable = upload(file, file.name, token)
    const observer = {
      next(res: any) {
        console.log(res, 'next')
        // ...
      },
      error(err: any) {
        console.log(err, 'error')
        // ...
      },
      complete(res: any) {
        console.log(res, 'complete')
        // ...
      },
    }
    observable.subscribe(observer)
  }

  return (
    <ul className={Style.list}>
      <li className={Style.item}>
        <span>内容：</span>
        <TextArea
          defaultValue={data.text}
          rows={4}
          onChange={(e) => handleChange(e, 'text')}
        ></TextArea>
      </li>
      <li className={Style.item}>
        <span>背景图：</span>
        <Input
          type="url"
          onChange={(e) => handleChange(e, 'url')}
          placeholder="在线地址"
        ></Input>
        <input type="file" onChange={handleFile} />
      </li>
      <li className={Style.item}></li>
    </ul>
  )
}

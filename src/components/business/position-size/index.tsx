import { useEffect, useState } from 'react'
import Style from './index.module.scss'
import { Input } from 'antd'

const keyArr = ['width', 'height', 'top', 'right', 'bottom', 'left']

export function PositionSize({
  comName,
  atter,
  onConfigChange,
  defaultValue,
}: {
  comName: string
  atter: string
  defaultValue: {
    width: number
    height: number
    top: number
    right: number
    bottom: number
    left: number
  }
  onConfigChange: (name: string, atter: string, value: number | string) => void
}) {
  const [positionSize, setPositionSize] = useState(defaultValue)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, key: string) {
    const value = e.target.value
    setPositionSize({
      ...positionSize,
      [key]: value,
    })
    let cssText = ''

    keyArr.forEach((_key) => {
      if (key === _key) {
        cssText += `${key}: ${value}px;`
        return
      }
      cssText += `${_key}: ${positionSize[_key] || 0}px;`
    })
    onConfigChange(comName, atter, cssText)
  }

  useEffect(() => {
    setPositionSize(defaultValue)
  }, [defaultValue])

  return (
    <ul className={Style.position_size_list}>
      {keyArr.map((key, index) => (
        <li className={Style.position_size_item} key={index}>
          <span>{key}：</span>
          <Input
            className={Style.input}
            type="number"
            value={positionSize[key]}
            onChange={(e) => handleChange(e, key)}
          />
        </li>
      ))}
    </ul>
  )
}

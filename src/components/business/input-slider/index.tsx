import { Slider, InputNumber, InputNumberProps, SliderSingleProps } from 'antd'
import { useEffect, useState } from 'react';
import Style from './index.module.scss'

export const InputSlider = (
  {
    max,
    min,
    step = 1,
    defaultValue = 1,
    onConfigChange,
    comName,
    atter
  }: InputNumberProps & SliderSingleProps & {
    comName: string
    atter: string
    onConfigChange: (name: string, atter: string, value: number) => void
  }
) => {
  const [inputValue, setInputValue] = useState(defaultValue)

  const onChange = (value: number) => {
    setInputValue(value)
    onConfigChange(comName, atter, value)
  }

  useEffect(() => {
    setInputValue(defaultValue)
  }, [defaultValue])

  return (
    <div className={Style.input_slider_wrap}>
      <Slider
        className={Style.slider_wrap}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        value={typeof inputValue === 'number' ? inputValue : 0}
      />
      <InputNumber
        min={min}
        max={max}
        step={step}
        style={{ margin: '0 8px' }}
        value={inputValue}
        onChange={onChange}
      />
    </div>
  )
}
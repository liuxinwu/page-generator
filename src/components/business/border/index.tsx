import { useEffect, useState } from "react"
import { Select } from "antd"
import { InputSlider } from "../input-slider"
import Style from "./index.module.scss"
import { SketchPicker } from "react-color"

const BORDER_STYLE = [
  {
    type: "无",
    value: "hidden",
  },
  {
    type: "实线",
    value: "solid",
  },
  {
    type: "虚线",
    value: "dashed",
  },
  {
    type: "点线",
    value: "dotted",
  },
  {
    type: "双线",
    value: "double",
  },
]

export function Border({
  comName,
  atter,
  onConfigChange,
  defaultValue,
}: {
  comName: string
  atter: string
  onConfigChange: Function
  defaultValue: {
    style: string
    width: number
    radius: number
    color: string
  }
}) {
  const [options, setOptions] = useState(defaultValue)

  function handleChange(key: string, value: string | number) {
    setOptions({ ...options, [key]: value })
  }

  const { style, width, radius, color } = options

  useEffect(() => {
    const { style, width, radius, color } = options
    onConfigChange(
      comName,
      atter,
      `border: ${width}px ${style} ${color};border-radius: ${radius}%;`
    )
  }, [comName, atter, options, onConfigChange])

  useEffect(() => {
    setOptions(defaultValue)
  }, [defaultValue])

  return (
    <ul className={Style.border_wrap}>
      <li className={Style.border_item}>
        <span className={Style.border_item_title}>样式</span>
        <div className={Style.border_item_value}>
          <Select
            value={style}
            style={{ minWidth: 100 }}
            onChange={(value) => handleChange("style", value)}
          >
            {BORDER_STYLE.map((border) => (
              <Select.Option value={border.value}>{border.type}</Select.Option>
            ))}
          </Select>
        </div>
      </li>
      <li className={Style.border_item}>
        <span className={Style.border_item_title}>大小</span>
        <div className={Style.border_item_value}>
          <InputSlider
            max={20}
            comName=""
            atter=""
            defaultValue={width}
            onConfigChange={(name, atter, value) =>
              handleChange("width", value)
            }
          />
        </div>
      </li>
      <li className={Style.border_item}>
        <span className={Style.border_item_title}>圆角（%）</span>
        <div className={Style.border_item_value}>
          <InputSlider
            max={50}
            comName=""
            atter=""
            defaultValue={radius}
            onConfigChange={(name, atter, value) =>
              handleChange("radius", value)
            }
          />
        </div>
      </li>
      <li className={Style.border_item}>
        <span className={Style.border_item_title}>颜色</span>
        <div className={Style.border_item_value}>
          <SketchPicker
            color={color}
            onChangeComplete={(value) => handleChange("color", value.hex)}
          />
        </div>
      </li>
    </ul>
  )
}

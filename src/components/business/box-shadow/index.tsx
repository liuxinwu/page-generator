import { useEffect, useState } from "react"
import { Select } from "antd"
import { InputSlider } from "../input-slider"
import Style from "./index.module.scss"
import { SketchPicker } from "react-color"

const TYPE_OPTIONS = [
  {
    text: "Outset",
    value: "",
  },
  {
    text: "Inset",
    value: "inset",
  },
]

export function BoxShadow({
  comName,
  atter,
  onConfigChange,
  defaultValue,
}: {
  comName: string
  atter: string
  onConfigChange: Function
  defaultValue: {
    hShadow: number
    vShadow: number
    blur: number
    spread: number
    color: string
    type: string
  }
}) {
  const [options, setOptions] = useState(defaultValue)

  function handleChange(key: string, value: string | number) {
    setOptions({ ...options, [key]: value })
  }

  const {
    hShadow = 0,
    vShadow = 0,
    blur = 0,
    spread = 0,
    color = "",
    type = "",
  } = options

  useEffect(() => {
    let _type = ""
    if (type === "inset") _type = "inset"
    console.log(
      `box-shadow: ${_type} ${color} ${hShadow}px ${vShadow}px ${blur}px ${spread}px;`
    )
    onConfigChange(
      comName,
      atter,
      `box-shadow: ${_type} ${color} ${hShadow}px ${vShadow}px ${blur}px ${spread}px;`
    )
  }, [
    comName,
    atter,
    onConfigChange,
    hShadow,
    vShadow,
    blur,
    spread,
    color,
    type,
  ])

  useEffect(() => {
    setOptions(defaultValue)
  }, [defaultValue])

  return (
    <ul className={Style.border_wrap}>
      <li className={Style.border_item}>
        <span className={Style.border_item_title}>水平阴影</span>
        <div className={Style.border_item_value}>
          <InputSlider
            max={20}
            comName=""
            atter=""
            defaultValue={hShadow}
            onConfigChange={(name, atter, value) =>
              handleChange("hShadow", value)
            }
          />
        </div>
      </li>
      <li className={Style.border_item}>
        <span className={Style.border_item_title}>垂直阴影</span>
        <div className={Style.border_item_value}>
          <InputSlider
            max={20}
            comName=""
            atter=""
            defaultValue={vShadow}
            onConfigChange={(name, atter, value) =>
              handleChange("vShadow", value)
            }
          />
        </div>
      </li>
      <li className={Style.border_item}>
        <span className={Style.border_item_title}>模糊距离</span>
        <div className={Style.border_item_value}>
          <InputSlider
            max={20}
            comName=""
            atter=""
            defaultValue={blur}
            onConfigChange={(name, atter, value) => handleChange("blur", value)}
          />
        </div>
      </li>
      <li className={Style.border_item}>
        <span className={Style.border_item_title}>阴影的大小</span>
        <div className={Style.border_item_value}>
          <InputSlider
            max={20}
            comName=""
            atter=""
            defaultValue={spread}
            onConfigChange={(name, atter, value) =>
              handleChange("spread", value)
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
      <li className={Style.border_item}>
        <span className={Style.border_item_title}>阴影的模式</span>
        <div className={Style.border_item_value}>
          <Select
            value={options.type}
            style={{
              width: 80,
            }}
            onChange={(value) => handleChange("type", value as any)}
          >
            {TYPE_OPTIONS.map((type) => (
              <Select.Option key={type.text} value={type.value}>
                {type.text}
              </Select.Option>
            ))}
          </Select>
        </div>
      </li>
    </ul>
  )
}

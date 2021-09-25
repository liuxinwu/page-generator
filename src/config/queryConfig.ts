import { InputSlider } from 'components/business/input-slider'
import { Border } from 'components/business/border'
import { PositionSize } from 'components/business/position-size'
import { BoxShadow } from 'components/business/box-shadow'

export const isNeedBaseConfig = () => {
  const names = ['text', 'chart', 'audio', 'video', 'component']

  return (name: string): boolean => {
    return names.includes(name)
  }
}

export const baseConfig = [
  {
    title: '透明',
    com: InputSlider,
    atter: 'opacity',
    options: {
      min: 0,
      max: 1,
      step: 0.01,
    },
  },
  {
    title: '旋转',
    com: InputSlider,
    atter: 'rotate',
    options: {
      min: 0,
      max: 359,
    },
  },
  {
    title: '对齐',
    atter: 'rototal',
  },
  {
    title: '边框',
    com: Border,
    atter: 'border',
    options: {},
  },
  {
    title: '阴影',
    com: BoxShadow,
    atter: 'box-shadow',
    options: {},
  },
  {
    title: '位置与大小',
    com: PositionSize,
    atter: 'position-size',
    options: {},
  },
]

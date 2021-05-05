
const components = {
  Block: () => import('components/common/block'),
  H: () => import('components/common/h'),
  P: () => import('components/common/p'),
  Ul: () => import('components/common/ul'),
  Button: () => import('components/common/button'),
  Img: () => import('components/common/img'),
  Form: () => import('components/common/form'),
  ChartWarp: () => import('components/common/chart'),
  Video: () => import('components/common/video'),
  Audio: () => import('components/common/audio'),
}

export default components
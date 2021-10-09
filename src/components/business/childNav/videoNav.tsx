import Style from './index.module.scss'
import Video from 'components/common/video'
import { Drag } from 'components/common/drag'

const imgSrc = [
  'https://dev-cdn-common.codemao.cn/dev/444/16242619123419bb336a9fc435f5e3285290cc785ca921621233759172.mp4',
  'https://dev-cdn-common.codemao.cn/dev/444/16242619123419bb336a9fc435f5e3285290cc785ca921621233759172.mp4',
  'https://dev-cdn-common.codemao.cn/dev/444/16242619123419bb336a9fc435f5e3285290cc785ca921621233759172.mp4',
]

export default function picNav() {
  return (
    <ul className={Style.video_list}>
      {imgSrc.map((src, index) => (
        <li className={Style.video_item} key={index}>
          <Drag
            componentName="video"
            options={{
              src
            }}
          >
            <Video src={src} />
          </Drag>
        </li>
      ))}
    </ul>
  )
}

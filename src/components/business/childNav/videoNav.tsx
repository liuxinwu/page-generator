import Style from './index.module.scss'
import Video from 'components/common/video'

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
          <Video src={src} />
        </li>
      ))}
    </ul>
  )
}

import Style from './index.module.scss'
import Pic from 'components/common/pic'
import { Drag } from 'components/common/drag'

const imgSrc = [
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F2c.zol-img.com.cn%2Fproduct%2F124_500x2000%2F748%2FceZOdKgDAFsq2.jpg&refer=http%3A%2F%2F2c.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626847159&t=5b9f1a5e2749120cf66aa4121036075f',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F2c.zol-img.com.cn%2Fproduct%2F124_500x2000%2F748%2FceZOdKgDAFsq2.jpg&refer=http%3A%2F%2F2c.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626847159&t=5b9f1a5e2749120cf66aa4121036075f',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F2c.zol-img.com.cn%2Fproduct%2F124_500x2000%2F748%2FceZOdKgDAFsq2.jpg&refer=http%3A%2F%2F2c.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626847159&t=5b9f1a5e2749120cf66aa4121036075f',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F2c.zol-img.com.cn%2Fproduct%2F124_500x2000%2F748%2FceZOdKgDAFsq2.jpg&refer=http%3A%2F%2F2c.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626847159&t=5b9f1a5e2749120cf66aa4121036075f',
]

export default function picNav() {
  return (
    <ul className={Style.pic_list}>
      {imgSrc.map((src, index) => (
        <li className={Style.pic_item} key={index}>
          <Drag
            componentName="pic"
            options={{
              src
            }}
          >
            <Pic src={src} />
          </Drag>
        </li>
      ))}
    </ul>
  )
}

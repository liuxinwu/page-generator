
import classnames from 'classnames'
import Style from './index.module.css'
import { Drag } from 'components/common/drag'
import { Video } from 'components/common/video'
import { Audio } from 'components/common/audio'

export default function Base() {
  return <>
    {
      /* - 块
      - 标题
      - 段落
      - 栅格
      - 按钮
      - 图片 */
    }
    <li className={classnames(Style['second-menu-item'])}>
      <h3>视频</h3>
      <Drag type="Video">
        <Video />
      </Drag>
    </li>

    <li className={classnames(Style['second-menu-item'])}>
      <h3>音频</h3>
      <Drag type="Audio">
        <Audio />
      </Drag>
    </li>
  </>
}
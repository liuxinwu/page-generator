import React from 'react'
import classnames from 'classnames'
import Style from './index.module.css'
import avatarUrl from 'images/avator.jpg'
import { Drag } from 'components/common/drag'
import { Block } from 'components/common/block'
import { H } from 'components/common/h'
import { P } from 'components/common/p'
import { Ul } from 'components/common/ul'
import { Button } from 'components/common/button'
import { Img } from 'components/common/img'

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
      <h3>块</h3>

      <Drag type="Block">
        <Block />
      </Drag>
    </li>

    <li className={classnames(Style['second-menu-item'])}>
      <h3>标题</h3>

      {
        new Array(6).fill(1).map((item, index) => <Drag key={index} type="H" query={{
          num: index + 1,
          contentEditable: true
        }}>
          <H num={index + 1} />
        </Drag>)
      }
    </li>

    <li className={classnames(Style['second-menu-item'])}>
      <h3>段落</h3>

      <Drag type="P" query={{
        contentEditable: true
      }}>
        <P />
      </Drag>
    </li>

    <li className={classnames(Style['second-menu-item'])}>
      <h3>栅格</h3>

      <Drag type="Ul">
        <Ul />
      </Drag>
    </li>

    <li className={classnames(Style['second-menu-item'])}>
      <h3>按钮</h3>

      <Drag type="Button" query={{class: Style['hl-x-btn']}}>
        <Button class={Style['hl-x-btn']}/>
      </Drag>
      <br />
      <Drag type="Button" query={{class: Style['hl-m-btn']}}>
        <Button class={Style['hl-m-btn']}/>
      </Drag>
    </li>

    <li className={classnames(Style['second-menu-item'])}>
      <h3>图片</h3>
      
      <Drag type="Img" query={{src: avatarUrl}}>
        <Img src={avatarUrl} />
      </Drag>
    </li>

    <li className={classnames(Style['second-menu-item'])}>
      <h3>背景</h3>

      <Drag type="BgImg">
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.huabanimg.com%2F6e3f0626f9d105ac8bef9af46cd8200083cbc1a22f1a5-VpRmJk_fw658&refer=http%3A%2F%2Fhbimg.huabanimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621845804&t=0b2f810d09efdf59459afc16a0933c37" alt="" className={classnames(Style['hl-bg-img'])} data-type="bg"/>
      </Drag>
    </li>
  </>
}
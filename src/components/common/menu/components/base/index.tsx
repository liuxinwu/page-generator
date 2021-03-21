import React from 'react'
import classnames from 'classnames'
import Style from './index.module.css'
import avatorUrl from 'images/avator.jpg'

export default function Base() {
  function handleDragStart(e: React.DragEvent) {
    console.log(e)
    const dt = e.dataTransfer
    dt!.setData('text/html', (e.target as HTMLElement).outerHTML)
  }

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

      <div className={classnames(Style['hl-block'], Style['el-move'], Style['spacing-c-l'])} draggable="true" onDragStart={handleDragStart}></div>
    </li>

    <li className={classnames(Style['second-menu-item'])}>
      <h3>标题</h3>

      <h1 draggable="true" onDragStart={handleDragStart} className={classnames(Style['el-move'], Style['spacing-c-l'])}>H1</h1>
      <h2 draggable="true" onDragStart={handleDragStart} className={classnames(Style['el-move'], Style['spacing-c-l'])}>H2</h2>
      <h3 draggable="true" onDragStart={handleDragStart} className={classnames(Style['el-move'], Style['spacing-c-l'])}>H3</h3>
    </li>

    <li className={classnames(Style['second-menu-item'])}>
      <h3>段落</h3>

      <p className={classnames(Style['hl-p'], Style['el-move'], Style['spacing-c-l'])} draggable="true" onDragStart={handleDragStart} >散文，汉语词汇，拼音是sǎn wén。一指文采焕发；二指犹行文；三指文体名。随着时代的发展，散文的概念由广义向狭义转变，并受到西方文化的影响。散文是一种抒发作者真情实感、写作方式灵活的记叙类文学体裁。</p>
    </li>

    <li className={classnames(Style['second-menu-item'])}>
      <h3>栅格</h3>

      <ul className={classnames(Style['hl-grid-wrap'], Style['el-move'], Style['spacing-c-l'])} draggable="true" onDragStart={handleDragStart}>
        {
          new Array(4 * 1).fill(1).map((item, index) => <li key={index} className={classnames(Style['hl-grid-wrap-item'])} style={{
            "background": index % 2 === 0 ? '#eee' : '#666'
          }}></li>)
        }
      </ul>
    </li>

    <li className={classnames(Style['second-menu-item'])}>
      <h3>按钮</h3>

      <button type="button" className={classnames(Style['hl-btn'], Style['hl-x-btn'], Style['el-move'], Style['spacing-c-l'])} draggable="true" onDragStart={handleDragStart}>login</button>
      <br />
      <button type="button" className={classnames(Style['hl-btn'], Style['hl-m-btn'], Style['el-move'], Style['spacing-c-l'])} draggable="true" onDragStart={handleDragStart}>login</button>
    </li>

    <li className={classnames(Style['second-menu-item'])}>
      <h3>图片</h3>

      <img src={avatorUrl} alt="" className={classnames(Style['hl-img'], Style['el-move'], Style['spacing-c-l'])} draggable="true" onDragStart={handleDragStart}/>
    </li>
  </>
}
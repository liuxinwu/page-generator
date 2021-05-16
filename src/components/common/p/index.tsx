import React from 'react'
import classnames from 'classnames'
import Style from './index.module.css'

export function P({ children, ...query }: {
  children?: object
}) {
  return <>
    <p className={classnames(Style['hl-p'])} {...query} >散文，汉语词汇，拼音是sǎn wén。一指文采焕发；二指犹行文；三指文体名。随着时代的发展，散文的概念由广义向狭义转变，并受到西方文化的影响。散文是一种抒发作者真情实感、写作方式灵活的记叙类文学体裁。</p>
    { children }
  </>
}
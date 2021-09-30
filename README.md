## 项目描述

> 基于 React 全家桶 + Vite 开发的页面生成器项目

## 开发思路

- 路由层面的封装（封装成熟悉的 Vue Router 配置的形式）
- 基于 hmtl5 的 Drag api 实现拖拽效果
- 由于 Drag 传递的内容是文本的，所以采用 innerHTML 的形式，实现对内容的渲染，
  后来由于 innerHTML 的导致方式事件失效，后采用 React.render（缺点，会附加一个父元素） 的方式渲染对应的组件、通过关系对应表找到组件
- Drag 组件的封装，高阶组件实现，给 children 添加 drag 属性及事件函数
- Drog 组件的封装，
- 功能组件的封装，
  - 需要一个 `name` 来关联当前操作操作的组件，保存操作数据
  - 需要一个 `status` 来区分是在菜单中使用还是编辑器中使用
- react-redux 保存设备的大小，组件的使用记录、reducers 按模块拆分
- 本地存贮的封装（命名空间、任意数据类型、过期时间）
- api、serve、cache(内存缓存) 层的封装
- ECharts 图表的封装、动态导入需要的图表模块
- 实现拖拽修改元素大小的图标，双击时出现（借助高阶组件实现）
- [资源上传静态七牛云](https://developer.qiniu.com/kodo/1302/qshell)

  `"src_dir" : "./build/",` 注意路径问题，用绝对路径有问题

## 问题点

- 通过 `style.cssText` 设置样式时在 `safari` 里面背景图会闪烁
- animate.css 设定了一些时间动画、更具体的动画时间需要自己设置（隐藏原理都是通过 `transfrom` 来做一个 `2000px` 的偏移）
  eg:
  animate\_\_delay-4s
- `React.createElement` 的子组件为 jsx 的时候必须指定一个 key 值、文本则不需要
  eg:
  src/components/common/text/index.tsx line: 11
- 问题点子元素上 onClick={handleSelect} 不会触发，只会触发父级通过 addEventListener 添加的事件（需要了解 React 的事件原理）

## webpack 转换至 vite 以提升构建速度

- 别名配置，需在 `tsconfig.json` 中声明对应的 `paths`,否则 `vscode` 不识别
- 全局注册 `React`
  - jsxInject: `import React from 'react'`
  - 需在 `tsconfig.json` 中声明对应的 `"jsx": "react-jsx",`,否则 `vscode` 不识别
- `import(xx)` 动态引入、require.context
  - 需要用 `import.meta.glob`、`import.meta.globEager` 代替、不然找不到资源
  - `import.meta.glob`、`import.meta.globEager` 的参数必须是一个路径的形式 `/ ./ ../`

## 流程化配置

- prettier + eslint + git(Pre-commit Hook) 代码美化、校验
  - [pretteier](https://prettier.io/docs/en/install.html)
  - [eslint](https://eslint.cn)

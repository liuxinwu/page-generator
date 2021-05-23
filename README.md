# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 项目描述

> 基于 React 全家桶开发的页面生成器项目

## 开发思路

- 路由层面的封装（封装成熟悉的 Vue Router 配置的形式）
- 基于 hmtl5 的 Drag api实现拖拽效果
- 由于 Drag 传递的内容是文本行的，所以采用 innerHTML 的形式，实现对内容的渲染，
后来由于 innerHTML 的导致方式事件失效，后采用 React.render 的方式渲染对应的组件、通过一的关系对应表找到组件（缺点，会附加一个父元素）
- react-redux 保存设备的大小，组件的使用记录、reducers 按模块拆分
- 本地存贮的封装（命名空间、任意数据类型、过期时间）
- api、serve、cache(内存缓存) 层的封装
- ECharts 图表的封装、动态导入需要的图表模块
- 实现拖拽修改元素大小的图标，双击时出现（借助高阶组件实现）

## 问题点

- 通过 style.cssText 设置样式时在 safari 里面背景图会闪烁

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

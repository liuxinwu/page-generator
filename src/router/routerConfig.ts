import { lazy } from 'react'
import { RouteProps } from 'react-router-dom'

interface RouteType extends RouteProps {
  routes?: RouteType[]
  meta?: { [index: string]: string | object | [] }
  redirect?: string
}

// const routeModule = require.context('./module', false, /\.ts$/)
// const route = routeModule.keys().map(_ => {
//   return routeModule(_).default
// })

// 路由配置表
const routes: RouteType[] = [
  {
    path: '/',
    exact: true,
    redirect: '/home',
  },
  {
    path: '/home',
    component: lazy(() => import('layout/default')),
    routes: [
      // {
      //   path: '/home/a',
      //   component: xx,
      // },
      // /home 路由下的子路由当没找到路由之后都会到这里
      // 其它子路由必须在这前面、如上
      {
        path: '',
        component: lazy(() => import('views/home')),
      }
    ],
    meta: {
      title: '首页',
    },
  },
  {
    path: '/editor',
    component: lazy(() => import('layout/editor')),
    routes: [
      {
        path: '',
        component: lazy(() => import('views/editor')),
      },
    ],
    meta: {
      title: '编辑器',
    },
  },
  // ...route,
  // 这里只能匹配到前面一级路由匹配不到的路由
  {
    path: '*',
    component: lazy(() => import('views/404')),
    meta: {
      title: '404',
    },
  },
]

// 生成路由缓存、方便渲染子级路由
function genRouteCache() {
  const routeCache: {
    [index: string]: RouteType
  } = Object.create(null)

  function cache(routes: RouteType[]) {
    routes.forEach((route) => {
      const key = route.path as string
      const routes = route.routes
      routeCache[key] = route

      routes && cache(routes)
    })
  }

  cache(routes)

  return (path: string) => {
    const route = routeCache[path]

    if (route) {
      return route
    }

    console.error('没有找到对应的路由模块 !')
  }
}

export const getRoute = genRouteCache()
export default routes

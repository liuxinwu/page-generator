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
      {
        path: '',
        component: lazy(() => import('views/home')),
      },
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
  {
    path: '*',
    component: lazy(() => import('views/404')),
    meta: {
      title: '404',
    },
  },
]

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

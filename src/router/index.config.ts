import { lazy } from 'react'
import { RouteProps } from 'react-router-dom'

interface RouteType extends RouteProps {
  routes?: RouteType[]
  meta?: { [index: string]: string | object | [] }
  redirect?: string
}

const routeModule = require.context('./module', false, /\.ts$/)
const route = routeModule.keys().map(_ => {
  return routeModule(_).default
})

const routes: RouteType[] = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('layout/default')),
    redirect: '/home'
  },
  {
    path: '/home',
    component: lazy(() => import('layout/default')),
    routes: [
      {
        path: '',
        component: lazy(() => import('views/public-module/home'))
      }
    ],
    meta: {
      title: '首页'
    }
  },
  ...route,
  {
    path: '*',
    component: lazy(() => import('views/public-module/404')),
    meta: {
      title: '404'
    }
  }
]

function genRouteCache() {
  const startTime = Date.now()

  const routeCache: {
    [index: string]: RouteType
  } = Object.create(null)

  function cache(routes: RouteType[]) {
    routes.forEach(route => {
      const key = route.path as string
      const routes = route.routes
      routeCache[key] = route

      routes && cache(routes)
    })
  }

  cache(routes)
  console.log((Date.now() - startTime) / 1000, 's', routeCache)

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
import { lazy } from 'react'
import { RouteProps } from 'react-router-dom'

interface RouteType extends RouteProps {
  routes?: RouteType[]
  meta?: { [index: string]: string | object | [] }
}

const routes: RouteType[] = [
  {
    path: '/news',
    component: lazy(() => import('layout/default')),
    routes: [
      {
        path: '/news/nba',
        component: lazy(() => import('views/news-module/nba')),
        meta: {
          title: 'nba'
        }
      },
      {
        path: '/news/cba',
        component: lazy(() => import('views/news-module/cba')),
        meta: {
          title: 'cba'
        }
      }
    ],
    meta: {
      title: '新闻'
    }
  },
  {
    path: '/',
    exact: true,
    component: lazy(() => import('layout/default')),
    meta: {
      title: '首页'
    }
  },
  {
    path: '',
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
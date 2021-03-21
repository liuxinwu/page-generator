import { lazy } from 'react'

export default {
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
}
import React from 'react'
import { Switch, useRouteMatch } from 'react-router-dom'
import { getRoute } from 'router/index.config'
import GenRoute from 'router/genRoute'
import './index.module.css'

export default function Main() {
  const { path } = useRouteMatch()
  const _routes = getRoute(path)?.routes
  console.log(_routes, '_routes')
  
  return <main>
    <Switch>
      <GenRoute routes={_routes} />
    </Switch>
  </main>
}
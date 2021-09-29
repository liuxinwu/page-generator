import { useRouteMatch } from 'react-router-dom'
import { getRoute } from 'router/routerConfig'
import GenRoute from 'router/genRoute'
import './index.module.css'

export default function Main() {
  const { path } = useRouteMatch()
  const _routes = getRoute(path)?.routes

  return (
    <main>
      <GenRoute routes={_routes} />
    </main>
  )
}

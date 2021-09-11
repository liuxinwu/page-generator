
import { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

export default function GenRoute({routes}: any) {

  return <Suspense fallback={<div>loading...</div>}>
    <Switch>
  {
    routes && routes.map((route: any, index: number) => {
      return route.redirect ? <Redirect key={index} to={route.redirect} {...route} /> : <Route key={index} {...route} />
    })
  }
  </Switch>
</Suspense>
  
}
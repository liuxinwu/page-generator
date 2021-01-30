import React from 'react'
import { Route } from 'react-router-dom'

export default function GenRoute({routes}: any) {

  return <>
  {
    routes && routes.map((route: any, index: number) => {
      return <Route key={index} {...route} />
    })
  }
  </>
}
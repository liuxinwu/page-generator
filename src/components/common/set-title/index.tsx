import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getRoute } from 'router/index.config'

export default function SetTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    const { title = '' } = getRoute(pathname)?.meta || {}
    document.title = (title || process.env.REACT_APP_TITLE) as string
  }, [pathname])

  return <></>
}
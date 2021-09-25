import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getRoute } from "router/routerConfig"

export default function SetTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    const { title = "" } = getRoute(pathname)?.meta || {}
    document.title = (title || "页面生成器") as string
  }, [pathname])

  return <></>
}

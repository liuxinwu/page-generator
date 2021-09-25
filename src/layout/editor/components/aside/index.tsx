import { useCallback, useState, Suspense } from "react"
import Nav, { NavType } from "components/business/nav"
import ChildNav from "components/business/childNav/index"
import Style from "./index.module.css"

export default function Aside() {
  const [currentNav, setCurrentNav] = useState<{
    nav?: NavType
    index?: number
  }>({})
  const [isClose, setIsClose] = useState(false)
  const onCurrentNav = useCallback((nav?: NavType, index?: number) => {
    if (!nav && !index) setIsClose(true)
    else setIsClose(false)
    setCurrentNav({
      nav,
      index,
    })
  }, [])

  return (
    <>
      <aside className={Style.aside_wrap} onClick={(e) => e.stopPropagation()}>
        <Nav onCurrentNav={onCurrentNav} />
      </aside>

      <Suspense fallback="加载中...">
        <ChildNav
          currentNav={currentNav}
          animationName={
            currentNav?.nav !== undefined
              ? "animate__fadeInLeftBig"
              : isClose
              ? "animate__fadeOutLeftBig"
              : "select_component_hidden"
          }
        />
      </Suspense>
    </>
  )
}

import { useCallback, useState } from 'react'
import Nav, { NavType } from 'components/business/nav'
import SelectComponent from 'components/business/selectComponent'
import Style from './index.module.css'

export default function Aside() {
  const [currentNav, setCurrentNav] = useState<{
    nav?: NavType
    index?: number
  }>()
  const onCurrentNav = useCallback((nav?: NavType, index?: number) => {
    setCurrentNav({
      nav,
      index
    })
  }, [])

  return (
    <>
      <aside className={Style.aside_wrap} onClick={e => e.stopPropagation()}>
        <Nav onCurrentNav={onCurrentNav} />
      </aside>

      { currentNav?.nav && <SelectComponent currentNav={currentNav} />}
    </>
  )
}
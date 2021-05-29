import classnames from "classnames";
import { NAV_OPTIONS } from "config/nav";
import { useCallback, useEffect } from "react";
import Style from "./index.module.scss";

export interface NavType {
  type: string
  icon: string
  text: string
}
interface NavPropsType {
  onCurrentNav: (nav?: NavType, index?: number) => void
}

export default function Nav(
  { onCurrentNav }: React.PropsWithChildren<NavPropsType>
) {
  const handleClick = useCallback((nav, index) => {
    onCurrentNav(nav, index)
  }, [onCurrentNav]);

  useEffect(() => {
    function handleBodyClick() {
      onCurrentNav()
    }
    document.addEventListener('click', handleBodyClick)

    return () => {
      document.removeEventListener('click', handleBodyClick)
    }
  }, [onCurrentNav])

  return (
    <ul className={Style.nav_list}>
      {NAV_OPTIONS.map((nav, index) => (
        <li
          key={nav.icon}
          className={Style.nav_item}
          onClick={() => handleClick(nav, index)}
        >
          <i
            className={classnames("iconfont", Style.nav_item_icon, nav.icon)}
          ></i>
          <span className={Style.nav_item_text}>{nav.text}</span>
        </li>
      ))}
    </ul>
  );
}

import classnames from "classnames";
import { NAV_OPTIONS } from "config/nav";
import { useCallback, useEffect } from "react";
import Style from "./index.module.scss";

export interface NavType {
  icon: string
  text: string
}
interface NavPropsType {
  onCurrentNav: (nav?: NavType, index?: number) => void
}

export default function Nav(
  { onCurrentNav }: React.PropsWithChildren<NavPropsType>
) {
  const handleMouseEnter = useCallback((nav, index) => {
    if ([0, 2].includes(index)) {
      console.log("handleMouseEnter");
      onCurrentNav(nav, index)
    }
  }, [onCurrentNav]);

  const handleClick = useCallback((nav, index) => {
    if (index === 0) return
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
          onMouseEnter={() => handleMouseEnter(nav, index)}
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

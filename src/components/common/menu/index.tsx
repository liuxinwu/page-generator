import React, { useState, useEffect, useMemo } from "react";
import Style from "./index.module.css";
import classNames from "classnames";
import { asideConfig } from 'config/global'

const SECOND_MENU = {
  0: React.lazy(() => import('./components/base')),
  1: React.lazy(() => import('./components/form')),
  2: React.lazy(() => import('./components/audioAndVideo')),
  3: React.lazy(() => import('./components/chart')),
}

export default function Menu({
  source,
}: {
  source: {
    iconClass: string;
    title: string;
  }[];
}) {
  const [index, setIndex] = useState(-1);
  let asideEl = useMemo(() => {
    return () => document.querySelector('#aside') as HTMLDivElement
  }, [])

  useEffect(() => {
    function bodyClick() {
      if (index === -1) return

      setIndex(-1);
      asideEl().style.width = asideConfig.minWidth
    }

    document.body.addEventListener('click', bodyClick)

    return () => {
      document.body.removeEventListener('click', bodyClick)
    }
  }, [index, asideEl])

  function handleSetIndex(e: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) {
    setIndex(index);
    asideEl().style.width = asideConfig.maxWidth
    e.stopPropagation()
  }

  const SecondMenu = SECOND_MENU[index.toString()]

  return (
    <div className={Style["menu-wrap"]}>
      <ul className={Style["menu-list"]}>
        {source.map((menu, menuIndex) => {
          return (
            <li
              className={classNames(
                Style["menu-item"],
                (index === menuIndex && Style["menu-item-active"]) || ""
              )}
              key={menuIndex}
              onClick={(e) => handleSetIndex(e, menuIndex)}
            >
              <i className={classNames("iconfont", menu.iconClass)} />
              <p>{menu.title}</p>
            </li>
          );
        })}
      </ul>

      <ul className={classNames(Style["second-menu-list"], index !== -1 && Style["second-menu-list-show"])}>
        { SecondMenu ? <SecondMenu /> : null }
      </ul>
    </div>
  );
}

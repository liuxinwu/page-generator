import { NavType } from 'components/business/nav';
import classnames from "classnames";
import Style from "./index.module.scss";

// 子菜单组件
const components = {
  text: React.lazy(() => import("./textNav")),
  chart: React.lazy(() => import('./chartNav')),
  pic: React.lazy(() => import('./picNav')),
  video: React.lazy(() => import('./videoNav'))
};

interface ChildNavType {
  currentNav: {
    nav?: NavType;
    index?: number;
  };
  animationName?: string;
}

export default function ChildNav({
  currentNav,
  animationName = "",
}: React.PropsWithChildren<ChildNavType>) {
  const { nav } = currentNav;

  if (!nav) return null;

  // 显示子菜单
  const Child = components[nav.type];
  return (
    <div
      className={classnames(
        "animate__animated",
        Style.select_component,
        animationName
      )}
      onClick={(e) => e.stopPropagation()}
    >
      <Child status="menu" />
    </div>
  );
}

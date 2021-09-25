import { ReactChild, Suspense } from "react"
import { BrowserRouter, BrowserRouterProps, Switch } from "react-router-dom"
import routes from "./routerConfig"
import GenRoute from "./genRoute"
import SetTilel from "components/common/set-title"

function c(allowTransition: boolean) {}

// 没有发现什么作用
function getUserConfirmation(message: string, callback: Function) {
  // const allowTransition = window.confirm(message || '123');
  // callback(allowTransition);
  callback(false)
}

const PROPS_DEFAULT_CONFIG = {
  basename: "",
  keyLength: 6,
  getUserConfirmation: getUserConfirmation("welcome to page generator !", c),
}

export default function Router(
  props: BrowserRouterProps & {
    children?: ReactChild
  }
) {
  const _props = Object.assign({}, PROPS_DEFAULT_CONFIG, props)

  return (
    <BrowserRouter {..._props}>
      <>
        {_props.children}

        <Suspense fallback="加载中...">
          <Switch>
            <GenRoute routes={routes} />
          </Switch>
        </Suspense>

        <SetTilel />
      </>
    </BrowserRouter>
  )
}

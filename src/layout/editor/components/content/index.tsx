import Aside from "../aside"
import Main from "../main"
import Style from "./index.module.css"

export default function Content() {
  return (
    <div className={Style["content-wrap"]}>
      <Aside />
      <Main />
    </div>
  )
}

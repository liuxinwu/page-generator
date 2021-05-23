
import classnames from 'classnames'
import Style from './index.module.css'

export function Button({
  children,
  ...props
}: any) {
  return <button type="button" {...props} className={classnames(Style['hl-btn'], props['class'])} >
    { children } Button
  </button>
}
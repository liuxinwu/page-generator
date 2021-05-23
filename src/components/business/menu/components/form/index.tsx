
import classnames from 'classnames'
import Style from './index.module.css'
import { Drag } from 'components/common/drag'
import { Form } from 'components/common/form'

export default function Base() {
  return <>
    {/* <li className={classnames(Style['second-menu-item'])}>
      <h3>输入框</h3>
      <Drag>
        <input type="text"/>
      </Drag>
    </li> */}

    <li className={classnames(Style['second-menu-item'])}>
      <h3>表单</h3>

      <Drag type="Form">
        <Form />
      </Drag>
    </li>
  </>
}
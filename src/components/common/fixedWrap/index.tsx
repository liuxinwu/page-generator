import React from 'react'
import ReactDOM from 'react-dom'

export default function FixedWrap(
  e: React.MouseEvent,
  Component: any,
  props: object
) {
  const div = document.createElement('div')
  div.style.position = 'absolute'
  document.body.appendChild(div)

  function Fixed() {
    const target = e.target as HTMLElement
    const l = e.nativeEvent.clientX - e.nativeEvent.offsetX
    const t = e.nativeEvent.clientY - e.nativeEvent.offsetY + target.clientHeight + 10

    return ReactDOM.render(<div style={{
      position: 'fixed',
      left: l,
      top: t,
      zIndex: 9999,
      minWidth: '150px',
      backgroundColor: 'white',
      boxShadow: '-2px 9px 20px 8px rgb(0 0 0 / 12%)'
    }}>
      {<Component hide={Fixed.hide} {...props} />}
    </div>, div)
  }

  Fixed.hide = function () {
    div.style.display = 'none'
  }

  Fixed.show = function () {
    div.style.display = 'block'
  }

  Fixed.destory = function () {
    ReactDOM.unmountComponentAtNode(div)

    if (div.parentElement) {
      div.parentElement.removeChild(div)
    }
  }

  Fixed()

  return Fixed
}

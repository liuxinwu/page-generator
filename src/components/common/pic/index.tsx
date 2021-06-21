import { Drag } from '../drag'
import { ChildrenProps } from 'types/childrenProps'

export default function Pic({
  name,
  status = 'menu',
  src
}: ChildrenProps<{
  src: string
}>) {

  const isEditor = status === 'editor'

  return (
    <Drag componentName='pic' status={status} options={{
      draggable: !isEditor,
      src: src
    }}>
      <img src={src} alt="" />
    </Drag>
  )
}
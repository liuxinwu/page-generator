import { Drag } from '../drag'
import { ChildrenProps } from 'types/childrenProps'

export default function Video({
  name,
  status = 'menu',
  src
}: ChildrenProps<{
  src: string
}>) {

  return (
    <Drag componentName='video' status={status} options={{
      src: src
    }}>
      <video src={src} />
    </Drag>
  )
}
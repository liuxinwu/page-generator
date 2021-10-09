import { ChildrenProps } from 'types/childrenProps'

export default function Pic({
  src,
  ...options
}: ChildrenProps<{
  src: string
}>) {

  return (
    <img src={src} alt="" {...options} />
  )
}

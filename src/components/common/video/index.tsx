import { ChildrenProps } from 'types/childrenProps'

export default function Video({
  status = 'menu',
  src,
  ...options
}: ChildrenProps<{
  src: string
}>) {
  const isEditor = status === 'editor'

  return (
      <video src={src} controls={isEditor} {...options} />
  )
}

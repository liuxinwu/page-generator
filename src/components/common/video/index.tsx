import { Drag } from "../drag"
import { ChildrenProps } from "types/childrenProps"

export default function Video({
  name,
  status = "menu",
  src,
}: ChildrenProps<{
  src: string
}>) {
  const isEditor = status === "editor"

  return (
    <Drag
      componentName="video"
      status={status}
      options={{
        src,
        controls: isEditor,
      }}
    >
      <video src={src} />
    </Drag>
  )
}

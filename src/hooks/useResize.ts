import { useEffect } from "react"

export const useResize = () => {
  useEffect(() => {
    const onResize = () => {}

    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])
}

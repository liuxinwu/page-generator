import { useEffect } from 'react'

export const useResize = () => {
  useEffect(() => {
    const onResize = () => {
      console.log('onResize')
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])
}
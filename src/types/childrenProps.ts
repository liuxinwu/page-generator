import React from 'react'

export type ChildrenProps<T> = T & React.PropsWithChildren<{
  status?: 'menu' | 'editor'
  name?: string
}> 
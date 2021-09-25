export interface StateType {
  equipment: EquipmentType
  useComponents: Map<string, UseComponentsType>
  activeComponent: ActiveComponentType
}

export interface EquipmentType {
  name: string
  size: {
    w: number
    h: number
  }
}

export interface UseComponentsType {
  name: string
  type?: string
  css?: string
  text?: string
  query?: object
}

export interface ActionType<T> {
  type: string
  value: T
}

export interface ActiveComponentType {
  name: string
  dom: HTMLDivElement | undefined
  [index: string]: any
}

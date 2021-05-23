export interface StateType {
  equipment: EquipmentType
  useComponents: Map<string, UseComponentsType>
}

export interface EquipmentType {
  name: string;
  size: {
    w: number;
    h: number;
  };
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

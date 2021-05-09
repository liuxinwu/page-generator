export interface StateType {
  equipment: EquipmentType
  useComponents: Set<UseComponentsType>
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
  type: string
  css: object
  text: string
  query: object
}
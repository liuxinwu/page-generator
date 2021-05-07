export interface StateType {
  equipment: EquipmentType
  useComponents: UseComponentsType
}

export interface EquipmentType {
  name: string;
  size: {
      w: number;
      h: number;
  };
}

export interface UseComponentsType {
  [index: string]: {
    type: string
    css: object
    text: string
  }
}
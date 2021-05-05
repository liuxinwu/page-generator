export interface StateType {
  equipment: EquipmentType
}

export interface EquipmentType {
  name: string;
  size: {
      w: number;
      h: number;
  };
}
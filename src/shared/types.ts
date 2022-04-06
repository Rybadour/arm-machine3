import { ItemsByType } from "../contexts/inventory";

export enum ItemType {
  Battery = "Battery",
  BrokenFlashlight = "BrokenFlashlight",
  CPU = "CPU",
  GasCan = "GasCan",
  LightBulb = "LightBulb",
  MachineParts = "MachineParts",
  MicroController = "MicroController",
  Motor = "Motor",
  RechargeableBattery = "RechargeableBattery",
  RubberHose = "RubberHose",
  ScrapElectronics = "ScrapElectronics",
  ScrapMetal = "ScrapMetal",
  Wires = "Wires",
}

export type RoomConfig = {
  id: string;
  name: string;
  mapLabel: string;
  x: number;
  y: number;
  width: number;
  height: number;
  loot: ItemsByType;
  explorationTime: number;
  connectedRooms: string[];
  hasLighting: boolean;
};

export type Room = RoomConfig & {
  isDiscovered: boolean;
  isKnown: boolean;
  isExplored: boolean;
  currentProgress: number;
  remainingItems: ItemType[];
};
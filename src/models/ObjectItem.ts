import { fabric } from 'fabric/index';

export interface Position {
  x: number;
  y: number;
  z?: number;
}

export interface ObjectItem {
  type: string;
  name: string;
  id: string;
  canvasObj: fabric.Object;
  weight: number;
  fs: number;
  width: number;
  height: number;
  index: number;
  fill: fabric.Color;
  position: Position;
  centerOfGravity: Position;
}

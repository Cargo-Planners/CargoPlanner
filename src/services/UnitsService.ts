import { ObjectItem } from '../models/ObjectItem';

export default class UnitsService {
  static ONE_UNIT_AS_IMAGE_PERCENT = 0.03422;
  static ONE_UNIT_IN_INCHES = 20;
  static Y_START_POSITION_AS_CANVAS_PERCENT = 0.3477;
  static X_START_POSITION_AS_CANVAS_PERCENT = 0.011977;
  static CARGO_LENGTH_AS_CANVAS_PERCENT = 0.52467;
  static CARGO_WIDTH_AS_CANVAS_PERCENT = 0.97247533667854;

  static pixelsToInches(dimensionInPixels: number, canvasWidth: number) {
    return Math.round(
      dimensionInPixels * this.getPixelToInchRatio(canvasWidth)
    );
  }

  static inchesToPixels(dimensionInInches: number, canvasWidth: number) {
    return Math.round(
      dimensionInInches / this.getPixelToInchRatio(canvasWidth)
    );
  }

  static getPixelToInchRatio(canvasWidth: number) {
    return UnitsService.ONE_UNIT_IN_INCHES / this.oneUnitInPixels(canvasWidth);
  }

  static oneUnitInPixels(canvasWidth: number) {
    return canvasWidth * UnitsService.ONE_UNIT_AS_IMAGE_PERCENT;
  }

  static pixelToInchObjectPipe(
    objectItem: ObjectItem,
    canvasWidth: number
  ): ObjectItem {
    return {
      ...objectItem,
      width: this.pixelsToInches(objectItem.width, canvasWidth),
      height: this.pixelsToInches(objectItem.height, canvasWidth),
    };
  }

  static startingPosition(
    canvasWidth: number,
    canvasHeight: number
  ): { top: number; left: number } {
    return {
      top: canvasHeight * this.Y_START_POSITION_AS_CANVAS_PERCENT,
      left: canvasWidth * this.X_START_POSITION_AS_CANVAS_PERCENT,
    };
  }
}

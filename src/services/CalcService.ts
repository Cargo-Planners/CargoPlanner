import { Item } from '../models/ObjectItem';
import { BasicDataState } from '../redux/BasicDataSlice';

export class CalcService {
  static OUTBOARD_MAX_FUEL_IN_LB = 8758;
  static INBOARD_MAX_FUEL_IN_LB = 8065;
  static CENTER_MAX_FUEL_IN_LB = 8065;
  static TEAM_MEMBER_WEIGHT_IN_LB = 170;

  static calculateTotalWeight = (
    basicData: BasicDataState,
    itemList: Item[]
  ) => {
    console.log(
      itemList
        .map((item) => item.weight)
        .reduce((previous: number, current: number) => previous + current)
    );
    return (
      CalcService.calculateGrossWeight(basicData) +
      itemList
        .map((item) => item.weight)
        .reduce((previous: number, current: number) => previous + current)
    );
  };
  private static calculateGrossWeight(basicData: BasicDataState) {
    let weight =
      (basicData.cockpitCrew + basicData.inspectorsCrew) *
      CalcService.TEAM_MEMBER_WEIGHT_IN_LB;
    weight += basicData.emptyWeight;
    weight += basicData.fuselage + basicData.inboard + basicData.outboard;
    // // console.log(`The GetGrossWeight function returns: ${weight}`)
    return weight;
  }
}

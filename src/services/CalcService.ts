import { Item } from '../models/ObjectItem';

export class CalcService {
  static calcTotalWeight = (emptyWeight: number, itemList: Item[]) => {
    console.log(
      itemList
        .map((item) => item.weight)
        .reduce((previous: number, current: number) => previous + current)
    );
    return (
      emptyWeight +
      itemList
        .map((item) => item.weight)
        .reduce((previous: number, current: number) => previous + current)
    );
  };
}

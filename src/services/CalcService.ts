import { Item } from '../models/ObjectItem';
import { BasicDataState } from '../redux/BasicDataSlice';

export class CalcService {
  OUTBOARD_MAX_FUEL_IN_LB = 8758;
  INBOARD_MAX_FUEL_IN_LB = 8065;
  CENTER_MAX_FUEL_IN_LB = 8065;
  TEAM_MEMBER_WEIGHT_IN_LB = 170;
  FUEL_LOST_PRE_FLIGHT = 1000;
  SAFETY_EQUIPMENT_WEIGHT = 250;
  SAFETY_EQUIPMENT_INDEX = -1;

  /**
   * TODO: change calculation of crew weight to consider in which cabin the load masters are
   * TODO: add the weight of the configuration to calculation
   */
  basicWeight = (basicData: BasicDataState) => {
    return (
      basicData.emptyWeight +
      (basicData.cockpitCrew + basicData.loadMasters) *
        this.TEAM_MEMBER_WEIGHT_IN_LB +
      this.SAFETY_EQUIPMENT_WEIGHT
    );
  };

  totalCargoWeight = (cargoList: Item[]) => {
    return cargoList.reduce((accumulatedWeight: number, currentCargo: Item) => {
      return accumulatedWeight + currentCargo.weight;
    }, 0);
  };

  zeroFuelWeight = (basicData: BasicDataState, cargoList: Item[]) => {
    return this.basicWeight(basicData) + this.totalCargoWeight(cargoList);
  };

  //TODO: add external to calculation once added to state
  fuelWeight = (basicData: BasicDataState) => {
    return basicData.outboard + basicData.inboard + basicData.auxiliary;
  };

  fuelWeightForFlight = (basicData: BasicDataState) => {
    return this.fuelWeight(basicData) - this.FUEL_LOST_PRE_FLIGHT;
  };

  totalAircraftWeight = (basicData: BasicDataState, cargoList: Item[]) => {
    return (
      this.zeroFuelWeight(basicData, cargoList) +
      this.fuelWeight(basicData) -
      this.FUEL_LOST_PRE_FLIGHT
    );
  };

  cargoIndex = (cargo: Item) => {
    return ((cargo.fs - 533.46) * cargo.weight) / 50000;
  };

  totalCargoIndex = (cargoList: Item[]) => {
    return cargoList.reduce((accumulatedIndex: number, currentCargo: Item) => {
      return accumulatedIndex + this.cargoIndex(currentCargo);
    }, 0);
  };

  aircraftIndex = (basicData: BasicDataState, cargoList: Item[]) => {
    return basicData.index + this.totalCargoIndex(cargoList);
  };

  centerOfGravity = (basicData: BasicDataState, cargoList: Item[]) => {
    return (
      ((this.aircraftIndex(basicData, cargoList) - 100) * 50000) /
        this.totalAircraftWeight(basicData, cargoList) +
      533.46
    );
  };

  meanAerodynamicChord = (basicData: BasicDataState, cargoList: Item[]) => {
    return ((this.centerOfGravity(basicData, cargoList) - 487.4) * 100) / 164.5;
  };
}

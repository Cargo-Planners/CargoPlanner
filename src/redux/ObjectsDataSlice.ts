import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cargo, Position } from '../models/ObjectItem';
import UnitsService from '../services/UnitsService';

export interface ObjectsDataState {
  cargoList: Cargo[];
  selectedCargo?: Cargo;
}

export interface PositionChanges {
  x?: number;
  y?: number;
  z?: number;
}

const initialState: ObjectsDataState = {
  cargoList: [],
  selectedCargo: undefined,
};

const unitsService = new UnitsService();

const ObjectsDataSlice = createSlice({
  name: 'objectsData',
  initialState,
  reducers: {
    setItemsList: (state, action) => {
      state.cargoList = action.payload;
    },
    addItem: (state, action) => {
      state.cargoList.push(action.payload);
    },
    setSelectedCargoById: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
      state.selectedCargo = state.cargoList.find(
        (cargo) => cargo.id === action.payload
      );
    },
    updateItemWeight: (
      state,
      action: PayloadAction<{ id: string; updatedWeight: number }>
    ) => {
      state.cargoList = state.cargoList.map((cargo) => {
        if (cargo.id === action.payload.id) {
          const modifiedObject = {
            ...cargo,
            height: action.payload.updatedWeight,
          };
          state.selectedCargo = modifiedObject;
          return modifiedObject;
        }

        return cargo;
      });
    },
    updateItemWidth: (
      state,
      action: PayloadAction<{ id: string; updatedWidth: number }>
    ) => {
      state.cargoList = state.cargoList.map((cargo) => {
        if (cargo.id === action.payload.id) {
          const modifiedObject = {
            ...cargo,
            height: action.payload.updatedWidth,
          };
          state.selectedCargo = modifiedObject;
          return modifiedObject;
        }

        return cargo;
      });
    },
    updateItemHeight: (
      state,
      action: PayloadAction<{ id: string; updatedHeight: number }>
    ) => {
      state.cargoList = state.cargoList.map((cargo) => {
        if (cargo.id === action.payload.id) {
          const modifiedObject = {
            ...cargo,
            height: action.payload.updatedHeight,
          };
          state.selectedCargo = modifiedObject;
          return modifiedObject;
        }

        return cargo;
      });
    },
    updateItemIndex: (
      state,
      action: PayloadAction<{ id: string; updatedIndex: number }>
    ) => {
      state.cargoList = state.cargoList.map((cargo) => {
        if (cargo.id === action.payload.id) {
          const modifiedObject = {
            ...cargo,
            index: action.payload.updatedIndex,
          };
          state.selectedCargo = modifiedObject;
          return modifiedObject;
        }

        return cargo;
      });
    },
    updateItemFs: (
      state,
      action: PayloadAction<{ id: string; updatedFs: number }>
    ) => {
      state.cargoList = state.cargoList.map((cargo) => {
        if (cargo.id === action.payload.id) {
          const modifiedObject = {
            ...cargo,
            fs: action.payload.updatedFs,
          };
          state.selectedCargo = modifiedObject;
          return modifiedObject;
        }

        return cargo;
      });
    },
    updateItemPosition: (
      state,
      action: PayloadAction<{ id: string; updatedPosition: Position }>
    ) => {
      state.cargoList = state.cargoList.map((cargo) => {
        if (cargo.id === action.payload.id) {
          const modifiedObject = {
            ...cargo,
            position: {
              ...cargo.position,
              ...action.payload.updatedPosition,
            },
          };
          state.selectedCargo = modifiedObject;
          return modifiedObject;
        }

        return cargo;
      });
    },
    updateItemScale: (
      state,
      action: PayloadAction<{ id: string; scaleX: number; scaleY: number }>
    ) => {
      state.cargoList = state.cargoList.map((cargo) => {
        if (cargo.id === action.payload.id) {
          const modifiedObject = {
            ...cargo,
            width: unitsService.ONE_UNIT_IN_INCHES * action.payload.scaleX,
            height: unitsService.ONE_UNIT_IN_INCHES * action.payload.scaleY,
          };
          state.selectedCargo = modifiedObject;
          return modifiedObject;
        }

        return cargo;
      });
    },
    updateItemCenterOfGravity: (
      state,
      action: PayloadAction<{
        id: string;
        updatedCenterOfGravity: PositionChanges;
      }>
    ) => {
      state.cargoList = state.cargoList.map((cargo) => {
        if (cargo.id === action.payload.id) {
          const modifiedObject = {
            ...cargo,
            centerOfGravity: {
              ...cargo.centerOfGravity,
              ...action.payload.updatedCenterOfGravity,
            },
          };
          state.selectedCargo = modifiedObject;
          return modifiedObject;
        }

        return cargo;
      });
    },
    updateItemName: (
      state,
      action: PayloadAction<{ id: string; name: string }>
    ) => {
      state.cargoList = state.cargoList.map((cargo) => {
        if (cargo.id === action.payload.id) {
          const modifiedObject = {
            ...cargo,
            name: action.payload.name,
          };
          state.selectedCargo = modifiedObject;
          return modifiedObject;
        }

        return cargo;
      });
    },
    updateItem: (state, action) => {
      state.cargoList = state.cargoList.map((cargo) => {
        if (cargo.id === action.payload.id) {
          const modifiedObject = { ...cargo, ...action.payload.changes };
          state.selectedCargo = modifiedObject;
          return modifiedObject;
        }

        return cargo;
      });
    },
  },
});

export default ObjectsDataSlice.reducer;
export const {
  setItemsList,
  addItem,
  setSelectedCargoById,
  updateItemWeight,
  updateItemWidth,
  updateItemHeight,
  updateItemIndex,
  updateItemFs,
  updateItemPosition,
  updateItemScale,
  updateItemCenterOfGravity,
  updateItemName,
} = ObjectsDataSlice.actions;

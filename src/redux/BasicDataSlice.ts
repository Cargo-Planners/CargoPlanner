import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface BasicDataState {
  cockpitCrew: number;
  loadMasters: number;
  emptyWeight: number;
  index: number;
  config: string;
  fuelPod: boolean;
  outboard: number;
  inboard: number;
  auxiliary: number;
}

export interface BasicDataChanges {
  cockpitCrew?: number;
  inspectorsCrew?: number;
  emptyWeight?: number;
  index?: number;
  config?: string;
  fuelPod?: boolean;
  outboard?: number;
  inboard?: number;
  auxiliary?: number;
}

const initialState: BasicDataState = {
  cockpitCrew: 0,
  loadMasters: 0,
  emptyWeight: 0,
  index: 0,
  config: '',
  fuelPod: false,
  outboard: 0,
  inboard: 0,
  auxiliary: 0,
};

const EditBasicDataSlice = createSlice({
  name: 'basicData',
  initialState,
  reducers: {
    incrementCockpitCrew: (state) => {
      state.cockpitCrew += 1;
    },
    decrementCockpitCrew: (state) => {
      state.cockpitCrew -= 1;
    },
    incrementInspectorsCrew: (state) => {
      state.loadMasters += 1;
    },
    decrementInspectorsCrew: (state) => {
      state.loadMasters -= 1;
    },
    updateEmptyWeight: (state, action) => {
      if (!isNaN(action.payload)) {
        state.emptyWeight = action.payload;
      } else {
        return state;
      }
    },
    updateIndex: (state, action) => {
      if (!isNaN(action.payload)) {
        state.index = action.payload;
      } else {
        return state;
      }
    },
    updateConfig: (state, action) => {
      if (!isNaN(action.payload)) {
        state.config = action.payload;
      } else {
        return state;
      }
    },
    updateFuelPod: (state, action) => {
      if (!isNaN(action.payload)) {
        state.fuelPod = action.payload;
      } else {
        return state;
      }
    },
    updateBasicData: (
      state,
      action: PayloadAction<{ changes: BasicDataChanges }>
    ) => {
      return { ...state, ...action.payload.changes };
    },
  },
});

export const {
  incrementCockpitCrew,
  decrementCockpitCrew,
  incrementInspectorsCrew,
  decrementInspectorsCrew,
  updateEmptyWeight,
  updateIndex,
  updateConfig,
  updateFuelPod,
  updateBasicData,
} = EditBasicDataSlice.actions;
export default EditBasicDataSlice.reducer;

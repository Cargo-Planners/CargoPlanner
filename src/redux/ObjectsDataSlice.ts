import { createSlice } from '@reduxjs/toolkit';
import { ObjectItem } from '../models/ObjectItem';

export interface ObjectsDataState {
  objectListItems: ObjectItem[];
  takeOffWeight: number;
  totalCargoWeight: number;
  totalIndex: number;
  ZFW: number;
  fuel: number;
  areaGraph: number;
  MAC: number;
  MACRange: number;
  index: number;
}

const initialState: ObjectsDataState = {
  objectListItems: [],
  takeOffWeight: 0,
  totalCargoWeight: 0,
  totalIndex: 0,
  ZFW: 0,
  fuel: 0,
  areaGraph: 0,
  MAC: 0,
  MACRange: 0,
  index: 0,
};

const ObjectsDataSlice = createSlice({
  name: 'objectsData',
  initialState,
  reducers: {
    setObjectsList: (state, action) => {
      state.objectListItems = action.payload;
    },
    addItem: (state, action) => {
      state.objectListItems = [...state.objectListItems, action.payload];
    },
    updateWeightObj: (state, action) => {
      state.objectListItems[action.payload.index].weight =
        action.payload.updatedWeight;
    },
    calculateWeight: (state) => {
      let total = 0;
      state.objectListItems.forEach((object) => {
        total += object.weight;
      });
      state.totalCargoWeight = total;
      state.takeOffWeight = total;
    },
    updateWidth: (state, action) => {
      state.objectListItems[action.payload.index].width = action.payload.value;
    },
    updateHeight: (state, action) => {
      state.objectListItems[action.payload.index].height = action.payload.value;
    },
    updateIndexObj: (state, action) => {
      state.objectListItems[action.payload.index].index = action.payload.value;
    },
    updateWidthAndHeightByScale: (state, action) => {
      state.objectListItems[action.payload.index].width =
        action.payload.updatedWidth;
      state.objectListItems[action.payload.index].height =
        action.payload.updatedHeight;
    },
    updateFs: (state, action) => {
      state.objectListItems[action.payload.index].fs = action.payload.updatedFs;
    },
    updateObjectPosition: (state, action) => {
      state.objectListItems[action.payload.index] = {
        ...state.objectListItems[action.payload.index],
        ...action.payload.position,
      };
    },
  },
});

export default ObjectsDataSlice.reducer;
export const {
  setObjectsList,
  addItem,
  updateWeightObj,
  calculateWeight,
  updateWidth,
  updateHeight,
  updateIndexObj,
  updateWidthAndHeightByScale,
  updateFs,
  updateObjectPosition,
} = ObjectsDataSlice.actions;

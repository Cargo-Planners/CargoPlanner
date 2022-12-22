import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
  name: "objectsData",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.objectListItems = [...state.objectListItems, action.payload];
    },
    updateWeight: (state, action) => {
      state.objectListItems[action.payload.index].weight = action.payload.value;
    },
    calculateWeight: (state, action) => {
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
  },
});

export default ObjectsDataSlice.reducer;
export const {
  addItem,
  updateWeight,
  calculateWeight,
  updateWidth,
  updateHeight,
  updateIndexObj,
  updateWidthAndHeightByScale,
  updateFs
} = ObjectsDataSlice.actions;

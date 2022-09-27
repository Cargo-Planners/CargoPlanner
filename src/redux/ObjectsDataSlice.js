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
  index: 0
};

const ObjectsDataSlice = createSlice({
  name: "objectsData",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.objectListItems.push(action.payload);
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
  },
});

export default ObjectsDataSlice.reducer;

<<<<<<< HEAD
export const { addItem, updateWeight, calculateWeight } =
=======
export const { addWeight, addItem, updateWeight, calculateWeight, updateWidth, updateHeight, updateIndexObj } =
>>>>>>> e201d475556aa9e78badb9a3c7df05d2322e825a
  ObjectsDataSlice.actions;

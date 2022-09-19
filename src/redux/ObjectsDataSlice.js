import { createSlice, current } from "@reduxjs/toolkit";

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
};

const ObjectsDataSlice = createSlice({
  name: "objectsData",
  initialState,
  reducers: {
    addWeight: (state, action) => {
      if (!isNaN(action.payload)) {
        state.totalCargoWeight = action.payload;
        state.takeOffWeight = action.payload;
        console.log(current(state.objectListItems));
      } else {
        return state;
      }
    },
    addItem: (state, action) => {
      state.objectListItems.push(action.payload);
      console.log(current(state.objectListItems));
    },
  },
});

export default ObjectsDataSlice.reducer;

export const { addWeight, addItem } = ObjectsDataSlice.actions;

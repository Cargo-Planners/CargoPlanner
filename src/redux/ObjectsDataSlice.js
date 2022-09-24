import { createSlice} from "@reduxjs/toolkit";

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
  },
});

export default ObjectsDataSlice.reducer;

export const { addWeight, addItem, updateWeight, calculateWeight } =
  ObjectsDataSlice.actions;

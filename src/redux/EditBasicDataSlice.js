import { createSlice } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

const initialState = {
  countPeople: 0,
  emptyWeight: 0,
  index: 0,
  config: 1,
  fuelPod: null,
};

const EditBasicDataSlice = createSlice({
  name: "basicData",

  initialState,
  reducers: {
    increment: (state) => {
      state.countPeople += 1;
    },
    decrement: (state) => {
      state.countPeople -= 1;
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
  },
});

export const {
  increment,
  decrement,
  updateEmptyWeight,
  updateIndex,
  updateConfig,
  updateFuelPod,
} = EditBasicDataSlice.actions;
export default EditBasicDataSlice.reducer;

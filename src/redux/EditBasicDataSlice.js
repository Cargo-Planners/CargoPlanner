import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cockpitCrew: 0,
  inspectorsCrew: 0,
  emptyWeight: 0,
  index: 0,
  config: 1,
  fuelPod: null,
  slider1: 0,
  slider2: 0,
  slider3: 0,
  slider4: 0,
  slider5: 0,
};

const EditBasicDataSlice = createSlice({
  name: "basicData",

  initialState,
  reducers: {
    incrementCockpitCrew: (state) => {
      state.cockpitCrew += 1;
    },
    decrementCockpitCrew: (state) => {
      state.cockpitCrew -= 1;
    },
    incrementInspectorsCrew: (state) => {
      state.inspectorsCrew += 1;
    },
    decrementInspectorsCrew: (state) => {
      state.inspectorsCrew -= 1;
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
    updateSlider1: (state, action) => {
      if (!isNaN(action.payload)) {
        state.slider1 = action.payload;
      } else {
        return state;
      }
    },
    updateSlider2: (state, action) => {
      if (!isNaN(action.payload)) {
        state.slider2 = action.payload;
      } else {
        return state;
      }
    },
    updateSlider3: (state, action) => {
      if (!isNaN(action.payload)) {
        state.slider3 = action.payload;
      } else {
        return state;
      }
    },
    updateSlider4: (state, action) => {
      if (!isNaN(action.payload)) {
        state.slider4 = action.payload;
      } else {
        return state;
      }
    },
    updateSlider5: (state, action) => {
      if (!isNaN(action.payload)) {
        state.slider5 = action.payload;
      } else {
        return state;
      }
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
  updateSlider1,
  updateSlider2,
  updateSlider3,
  updateSlider4,
  updateSlider5,
} = EditBasicDataSlice.actions;
export default EditBasicDataSlice.reducer;

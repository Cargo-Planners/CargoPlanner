import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  takeOffWeight: 0,
  totalCargoWeight: 0,
  totalIndex: 0,
  ZFW: 0,
  fuel: 0,
  areaGraph: 0,
  MAC: 0,
  MACRange: 0,
};

const EditStaticDataButtonSlice = createSlice({
  name: "staticData",
  initialState,
  reducers: {
    addWeight: (state, action) => {
      if (!isNaN(action.payload)) {
        state.totalCargoWeight = action.payload;
        state.takeOffWeight = action.payload;
      } else {
        return state;
      }
    },
  },
});

export default EditStaticDataButtonSlice.reducer;

export const { addWeight } = EditStaticDataButtonSlice.actions;

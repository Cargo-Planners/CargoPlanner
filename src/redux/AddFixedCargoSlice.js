import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  objectListItems: [],
};

const AddFixedCargoSlice = createSlice({
  name: "fixedCargo",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.objectListItems.push(action.payload);
    },
  },
});

export default AddFixedCargoSlice.reducer;

export const { addItem } = AddFixedCargoSlice.actions;

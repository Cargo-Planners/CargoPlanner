import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  objectList: [],
};

const AddObject2Array = createSlice({
  name: "objectData",
  initialState,
  reducers: {
    addItemHW: (state, action) => {
      state.objectList.push(action.payload);
    },
  },
});

export default AddObject2Array.reducer;

export const { addItemHW } = AddObject2Array.actions;

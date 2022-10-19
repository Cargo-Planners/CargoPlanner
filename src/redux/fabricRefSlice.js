import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fabricRef: null,
};

const fabricRefDataSlice = createSlice({
  name: "fabricRef",
  initialState,
  reducers: {
    addObjectToGrid: (state, action) => {},
    setFabricRef: (state, action) => {
      console.log(action.payload);
    //   state.fabricRef = action.payload.fabricRef;
    },
  },
});

export default fabricRefDataSlice.reducer;

export const { addObjectToGrid, setFabricRef } = fabricRefDataSlice.actions;

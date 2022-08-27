import { configureStore } from "@reduxjs/toolkit";
import EditStaticDataButtonReducer from "./EditStaticDataButtonSlice";
import AddFixedCargoReducer from "./AddFixedCargoSlice";

export const store = configureStore({
  reducer: {
    staticData: EditStaticDataButtonReducer,
    fixedCargo: AddFixedCargoReducer,
  },
});

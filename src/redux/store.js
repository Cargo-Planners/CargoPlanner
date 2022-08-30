import { configureStore } from "@reduxjs/toolkit";
import EditStaticDataButtonReducer from "./EditStaticDataButtonSlice";
import AddFixedCargoReducer from "./AddFixedCargoSlice";
import EditBasicDataReducer from "./EditBasicDataSlice";

export const store = configureStore({
  reducer: {
    staticData: EditStaticDataButtonReducer,
    fixedCargo: AddFixedCargoReducer,
    basicData: EditBasicDataReducer,
  },
});

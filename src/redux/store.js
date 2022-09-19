import EditStaticDataButtonReducer from "./EditStaticDataButtonSlice";
import AddFixedCargoReducer from "./AddFixedCargoSlice";
import EditBasicDataReducer from "./EditBasicDataSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    staticData: EditStaticDataButtonReducer,
    fixedCargo: AddFixedCargoReducer,
    basicData: EditBasicDataReducer,
  },
});

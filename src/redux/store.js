import { configureStore } from "@reduxjs/toolkit";
import EditStaticDataButtonReducer from "./EditStaticDataButtonSlice";

export const store = configureStore({
  reducer: { staticData: EditStaticDataButtonReducer },
});

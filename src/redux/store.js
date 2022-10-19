import ObjectsDataSliceReducer from "./ObjectsDataSlice";
import EditBasicDataReducer from "./EditBasicDataSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    objectsData: ObjectsDataSliceReducer,
    basicData: EditBasicDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

import ObjectsDataSliceReducer from "./ObjectsDataSlice";
import EditBasicDataReducer from "./EditBasicDataSlice";
import fabricRefSliceReducer from "./fabricRefSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    objectsData: ObjectsDataSliceReducer,
    basicData: EditBasicDataReducer,
    fabricRef : fabricRefSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

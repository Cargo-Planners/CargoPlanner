import ObjectsDataSliceReducer from './ObjectsDataSlice';
import EditBasicDataReducer from './EditBasicDataSlice';
import { configureStore } from '@reduxjs/toolkit';
import PopupSliceReducer from './PopupSlice';

export const store = configureStore({
  reducer: {
    objectsData: ObjectsDataSliceReducer,
    basicData: EditBasicDataReducer,
    popupReducer: PopupSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

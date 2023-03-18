import ObjectsDataSliceReducer, { ObjectsDataState } from './ObjectsDataSlice';
import EditBasicDataReducer, { BasicDataState } from './EditBasicDataSlice';
import { configureStore } from '@reduxjs/toolkit';
import PopupSliceReducer, { PopupState } from './PopupSlice';

export type State = {
  objectsData: ObjectsDataState;
  basicData: BasicDataState;
  popupReducer: PopupState;
};

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

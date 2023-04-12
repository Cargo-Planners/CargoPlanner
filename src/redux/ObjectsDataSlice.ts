import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item, Position } from '../models/ObjectItem';
import UnitsService from '../services/UnitsService';

export interface ObjectsDataState {
  itemList: Item[];
  dataCollection: {
    takeOffWeight: number;
    totalCargoWeight: number;
    totalIndex: number;
    ZFW: number;
    fuel: number;
    areaGraph: number;
    MAC: number;
    MACRange: number;
    index: number;
  };
}

const initialState: ObjectsDataState = {
  itemList: [],
  dataCollection: {
    takeOffWeight: 0,
    totalCargoWeight: 0,
    totalIndex: 0,
    ZFW: 0,
    fuel: 0,
    areaGraph: 0,
    MAC: 0,
    MACRange: 0,
    index: 0,
  },
};

const ObjectsDataSlice = createSlice({
  name: 'objectsData',
  initialState,
  reducers: {
    setItemsList: (state, action) => {
      state.itemList = action.payload;
    },
    addItem: (state, action) => {
      state.itemList.push(action.payload);
    },
    updateItemWeight: (
      state,
      action: PayloadAction<{ id: string; updatedWeight: number }>
    ) => {
      state.itemList = state.itemList.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              weight: action.payload.updatedWeight,
            }
          : item
      );
    },
    updateItemWidth: (
      state,
      action: PayloadAction<{ id: string; updatedWidth: number }>
    ) => {
      state.itemList = state.itemList.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              width: action.payload.updatedWidth,
            }
          : item
      );
    },
    updateItemHeight: (
      state,
      action: PayloadAction<{ id: string; updatedHeight: number }>
    ) => {
      state.itemList = state.itemList.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              height: action.payload.updatedHeight,
            }
          : item
      );
    },
    updateItemIndex: (
      state,
      action: PayloadAction<{ id: string; updatedIndex: number }>
    ) => {
      state.itemList = state.itemList.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              index: action.payload.updatedIndex,
            }
          : item
      );
    },
    updateItemFs: (
      state,
      action: PayloadAction<{ id: string; updatedFs: number }>
    ) => {
      state.itemList = state.itemList.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              fs: action.payload.updatedFs,
            }
          : item
      );
    },
    updateItemPosition: (
      state,
      action: PayloadAction<{ id: string; updatedPosition: Position }>
    ) => {
      state.itemList = state.itemList.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              position: action.payload.updatedPosition,
            }
          : item
      );
    },
    updateItemScale: (
      state,
      action: PayloadAction<{ id: string; scaleX: number; scaleY: number }>
    ) => {
      state.itemList = state.itemList.map((obj) =>
        obj.id === action.payload.id
          ? {
              ...obj,
              width: UnitsService.ONE_UNIT_IN_INCHES * action.payload.scaleX,
              height: UnitsService.ONE_UNIT_IN_INCHES * action.payload.scaleY,
            }
          : obj
      );
    },
    updateItem: (state, action) => {
      state.itemList = state.itemList.map((obj) =>
        obj.id === action.payload.id
          ? { ...obj, ...action.payload.changes }
          : obj
      );
    },
  },
});

export default ObjectsDataSlice.reducer;
export const {
  setItemsList,
  addItem,
  updateItemWeight,
  updateItemWidth,
  updateItemHeight,
  updateItemIndex,
  updateItemFs,
  updateItemPosition,
  updateItemScale,
} = ObjectsDataSlice.actions;

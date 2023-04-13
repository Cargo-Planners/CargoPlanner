import {
  Action,
  AnyAction,
  Dispatch,
  Middleware,
  MiddlewareAPI,
} from '@reduxjs/toolkit';
import { State } from '../store';
import { changeGeneralData } from '../GeneralDataSlice';

export const updateTotalWeightEffect: Middleware =
  (store: MiddlewareAPI<Dispatch<AnyAction>, State>) =>
  (next: Dispatch) =>
  (action: Action) => {
    next(action);

    const triggerActions = [
      'objectsData/updateItemWeight',
      'basicData/updateEmptyWeight',
    ];

    if (triggerActions.includes(action.type)) {
      store.dispatch(changeGeneralData({ totalCargoWeight: 0 }));
    }
  };

// NgRx
import { Action, createReducer, on } from '@ngrx/store';

// Store
import { ItemsActions } from '../actions/action-types';

// Models
import { ItemsModel } from '../../../../models/items-list.models';

export interface ItemsDataState {
  items: ItemsModel[];
  fabItems: ItemsModel[];
  errors: any;
}

export const initialItemsDataState: ItemsDataState = {
  items: null,
  fabItems: [],
  errors: null,
};

const itemsDataReducer = createReducer(
  initialItemsDataState,
  on(ItemsActions.loadItemssSuccess, (state, action) => {
    return {
      ...state,
      items: action.items,
    };
  }),
  on(ItemsActions.loadItemsFailure, (state, action) => {
    return {
      ...state,
      errors: action.error,
    };
  }),
  on(ItemsActions.updateFabItems, (state, action) => {
    return {
      ...state,
      fabItems: action.fabItems,
    };
  }),
  on(ItemsActions.clearFabItems, (state) => {
    return {
      ...state,
      fabItems: [],
    };
  }),
  on(ItemsActions.clearDataList, () => {
    return {
      ...initialItemsDataState,
    };
  })
);

export function itemsDataReducerFunction(
  state: ItemsDataState | undefined,
  action: Action
) {
  return itemsDataReducer(state, action);
}

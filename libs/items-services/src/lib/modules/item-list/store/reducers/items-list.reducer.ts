// NgRx
import { Action, createReducer, on } from '@ngrx/store';

// Store
import { ItemsActions } from '../actions/action-types';

// Models
import { ItemsModel } from '../../../../models/items-list.models';

export interface ItemsDataState {
  products: ItemsModel[];
  errors: any;
}

export const initialItemsDataState: ItemsDataState = {
  products: [],
  errors: null,
};

const itemsDataReducer = createReducer(
  initialItemsDataState,
  on(ItemsActions.loadItemssSuccess, (state, action) => {
    return {
      ...state,
      products: action.items,
    };
  }),
  on(ItemsActions.loadItemsFailure, (state, action) => {
    return {
      ...state,
      errors: action.error,
    };
  })
);

export function itemsDataReducerFunction(
  state: ItemsDataState | undefined,
  action: Action
) {
  return itemsDataReducer(state, action);
}

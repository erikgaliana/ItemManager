// NgRx
import { ActionReducerMap } from '@ngrx/store';

// Store
import { itemsDataReducerFunction, ItemsDataState } from './items-list.reducer';

export interface ItemsState {
  itemsDataState: ItemsDataState;
}

export const productsReducers: ActionReducerMap<ItemsState> = {
  itemsDataState: itemsDataReducerFunction,
};

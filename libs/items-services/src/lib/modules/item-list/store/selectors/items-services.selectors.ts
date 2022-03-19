// NgRx
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Store
import { ItemsState } from '../reducers/reducer-map';

export const getItemsState = createFeatureSelector<ItemsState>('items');

// View data Selectors
export const getItemsDataState = createSelector(
  getItemsState,
  (state) => state.itemsDataState
);

export const getItems = createSelector(
  getItemsDataState,
  (state) => state.items
);

export const getIsItemsLoaded = createSelector(
  getItemsDataState,
  (state) => !!state.items
);

export const getFabItems = createSelector(
  getItemsDataState,
  (state) => state.fabItems
);

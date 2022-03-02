import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ITEMS_SERVICES_FEATURE_KEY,
  State,
  itemsServicesAdapter,
} from './items-services.reducer';

// Lookup the 'ItemsServices' feature state managed by NgRx
export const getItemsServicesState = createFeatureSelector<State>(
  ITEMS_SERVICES_FEATURE_KEY
);

const { selectAll, selectEntities } = itemsServicesAdapter.getSelectors();

export const getItemsServicesLoaded = createSelector(
  getItemsServicesState,
  (state: State) => state.loaded
);

export const getItemsServicesError = createSelector(
  getItemsServicesState,
  (state: State) => state.error
);

export const getAllItemsServices = createSelector(
  getItemsServicesState,
  (state: State) => selectAll(state)
);

export const getItemsServicesEntities = createSelector(
  getItemsServicesState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getItemsServicesState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getItemsServicesEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);

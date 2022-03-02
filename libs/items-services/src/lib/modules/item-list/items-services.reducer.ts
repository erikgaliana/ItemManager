import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ItemsServicesActions from './items-services.actions';
import { ItemsServicesEntity } from './items-services.models';

export const ITEMS_SERVICES_FEATURE_KEY = 'itemsServices';

export interface State extends EntityState<ItemsServicesEntity> {
  selectedId?: string | number; // which ItemsServices record has been selected
  loaded: boolean; // has the ItemsServices list been loaded
  error?: string | null; // last known error (if any)
}

export interface ItemsServicesPartialState {
  readonly [ITEMS_SERVICES_FEATURE_KEY]: State;
}

export const itemsServicesAdapter: EntityAdapter<ItemsServicesEntity> =
  createEntityAdapter<ItemsServicesEntity>();

export const initialState: State = itemsServicesAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const itemsServicesReducer = createReducer(
  initialState,
  on(ItemsServicesActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    ItemsServicesActions.loadItemsServicesSuccess,
    (state, { itemsServices }) =>
      itemsServicesAdapter.setAll(itemsServices, { ...state, loaded: true })
  ),
  on(ItemsServicesActions.loadItemsServicesFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return itemsServicesReducer(state, action);
}

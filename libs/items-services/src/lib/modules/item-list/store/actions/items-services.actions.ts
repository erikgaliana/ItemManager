// NgRx
import { createAction, props } from '@ngrx/store';

// Models
import { ItemsModel } from '../../../../models/items-list.models';

export const loadItems = createAction('[Items List] Load Items List');

export const loadItemssSuccess = createAction(
  '[Items List] Load Items List Success',
  props<{ items: ItemsModel[] }>()
);

export const loadItemsFailure = createAction(
  '[Items List] Load Items List Failure',
  props<{ error: any }>()
);

export const updateFabItems = createAction(
  '[Items List] Update Fab Items',
  props<{ fabItems: ItemsModel[] }>()
);

export const clearFabItems = createAction('[Items List] Clear Fab Items List');

export const clearDataList = createAction('[Items List] Clear Data');

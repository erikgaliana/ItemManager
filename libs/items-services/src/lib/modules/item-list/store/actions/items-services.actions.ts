// NgRx
import { createAction, props } from '@ngrx/store';

// Models
import { ItemsModel } from '../../../../models/items-list.models';

export const loadItems = createAction('[Products] Load Products');

export const loadItemssSuccess = createAction(
  '[Items List] Load Items List Success',
  props<{ items: ItemsModel[] }>()
);

export const loadItemsFailure = createAction(
  '[Items List] Load Items List Failure',
  props<{ error: any }>()
);

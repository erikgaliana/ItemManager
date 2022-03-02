import { createAction, props } from '@ngrx/store';

export const loadItems = createAction('[Products] Load Products');

export const loadItemssSuccess = createAction(
  '[Items List] Load Items List Success',
  props<{ products: any[] }>()
);

export const loadItemsFailure = createAction(
  '[Items List] Load Items List Failure',
  props<{ error: any }>()
);

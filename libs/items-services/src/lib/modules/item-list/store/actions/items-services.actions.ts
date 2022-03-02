import { createAction, props } from '@ngrx/store';
import { ItemsServicesEntity } from '../../../../models/items-services.models';

export const init = createAction('[ItemsServices Page] Init');

export const loadItemsServicesSuccess = createAction(
  '[ItemsServices/API] Load ItemsServices Success',
  props<{ itemsServices: ItemsServicesEntity[] }>()
);

export const loadItemsServicesFailure = createAction(
  '[ItemsServices/API] Load ItemsServices Failure',
  props<{ error: any }>()
);

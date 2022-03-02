// Angular
import { Injectable } from '@angular/core';

// Rxjs
import { exhaustMap, map, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

// NgRx
import { createEffect, Actions, ofType } from '@ngrx/effects';

// Api
import { ItemsApi } from '../../../../api/itemsApi';

// Store
import { ItemsActions } from '../actions/action-types';

// Models
import { ItemsModel } from '../../../../models/items-list.models';

@Injectable()
export class ItemsEffects {
  constructor(private readonly actions$: Actions, private itemsApi: ItemsApi) {}

  getItemsData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ItemsActions.loadItems),
      exhaustMap(() => {
        return this.itemsApi.getProducts().pipe(
          map((response: ItemsModel[]) => {
            return ItemsActions.loadItemssSuccess({ products: response });
          }),
          catchError((error) => {
            return of(ItemsActions.loadItemsFailure({ error }));
          })
        );
      })
    );
  });
}

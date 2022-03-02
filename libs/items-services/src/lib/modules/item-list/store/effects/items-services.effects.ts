import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as ItemsServicesActions from './store/actions/items-services.actions';
import * as ItemsServicesFeature from './items-services.reducer';

@Injectable()
export class ItemsServicesEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemsServicesActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return ItemsServicesActions.loadItemsServicesSuccess({
            itemsServices: [],
          });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return ItemsServicesActions.loadItemsServicesFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}

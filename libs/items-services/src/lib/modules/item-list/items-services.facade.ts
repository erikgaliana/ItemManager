import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as ItemsServicesActions from './items-services.actions';
import * as ItemsServicesFeature from './items-services.reducer';
import * as ItemsServicesSelectors from './items-services.selectors';

@Injectable()
export class ItemsServicesFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(
    select(ItemsServicesSelectors.getItemsServicesLoaded)
  );
  allItemsServices$ = this.store.pipe(
    select(ItemsServicesSelectors.getAllItemsServices)
  );
  selectedItemsServices$ = this.store.pipe(
    select(ItemsServicesSelectors.getSelected)
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(ItemsServicesActions.init());
  }
}

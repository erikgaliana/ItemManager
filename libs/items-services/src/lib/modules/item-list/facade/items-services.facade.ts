// Angular
import { Injectable } from '@angular/core';

// RxJs
import { Observable } from 'rxjs';

// NgRx
import { select, Store } from '@ngrx/store';

// Store
import { ItemsState } from '../store/reducers/reducer-map';
import * as fromSelectors from '../store/selectors/items-services.selectors';
import { ItemsActions } from '../store/actions/action-types';

// Models
import { ItemsModel } from '../../../models/items-list.models';

@Injectable()
export class ItemsFacade {
  // DATA OBSERVABLES
  items$: Observable<ItemsModel[]> = this.parentStore.pipe(
    select(fromSelectors.getItems)
  );

  isItemssLoaded$: Observable<boolean> = this.parentStore.pipe(
    select(fromSelectors.getIsItemsLoaded)
  );

  constructor(private parentStore: Store<ItemsState>) {}

  loadItemsData(): void {
    this.parentStore.dispatch(ItemsActions.loadItems());
  }
}

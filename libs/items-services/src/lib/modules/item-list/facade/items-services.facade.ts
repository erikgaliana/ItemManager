// Angular
import { Injectable } from '@angular/core';

// RxJs
import { Observable, take } from 'rxjs';

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

  fabItems$: Observable<ItemsModel[]> = this.parentStore.pipe(
    select(fromSelectors.getFabItems)
  );

  isItemssLoaded$: Observable<boolean> = this.parentStore.pipe(
    select(fromSelectors.getIsItemsLoaded)
  );

  constructor(private parentStore: Store<ItemsState>) {}

  loadItemsData(): void {
    this.parentStore.dispatch(ItemsActions.loadItems());
  }

  addFab(item: ItemsModel) {
    this.fabItems$.pipe(take(1)).subscribe((fabItems: ItemsModel[]) => {
      const newItemFabList = [...fabItems, item];
      this.parentStore.dispatch(
        ItemsActions.updateFabItems({ fabItems: newItemFabList })
      );
    });
  }

  deleteFab(i: number): void {
    this.fabItems$.pipe(take(1)).subscribe((fabItems: ItemsModel[]) => {
      const deleted = [...fabItems];
      deleted.splice(i, 1);

      this.parentStore.dispatch(
        ItemsActions.updateFabItems({ fabItems: deleted })
      );
    });
  }
}

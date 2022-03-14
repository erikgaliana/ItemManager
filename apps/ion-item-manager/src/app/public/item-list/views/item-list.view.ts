// Angular
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

// Rxjs
import { filter, map, Observable, Subject, take, withLatestFrom } from 'rxjs';

// Store
import { ItemsFacade } from '@item-manager/items-services';

// Models
import { ItemsModel } from '@item-manager/items-models';

@Component({
  selector: 'item-manager-item-list',
  templateUrl: './item-list.view.html',
  styleUrls: ['./item-list.view.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemListViewComponent implements OnInit, OnDestroy {
  paginatedItems$: Observable<ItemsModel[]>;
  numberOfITems = 10;

  private destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(public itemsFacade: ItemsFacade) {}

  ngOnInit(): void {
    this.itemsFacade.loadItemsData();
    this.firstItems();
  }

  ngOnDestroy(): void {
    this.finishDestroyedSubscription();
  }

  doInfinite(event: any): void {
    this.itemsFacade.items$
      .pipe(take(1), withLatestFrom(this.paginatedItems$))
      .subscribe(([items, paginatedItems]) => {
        if (paginatedItems?.length >= items?.length) {
          event.target.disabled = true;
          return;
        }
      });

    setTimeout(() => {
      this.addMoreItems();
      event.target.complete();
    }, 1000);
  }

  private finishDestroyedSubscription(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  private firstItems(): void {
    this.paginatedItems$ = this.itemsFacade.items$.pipe(
      filter((items: ItemsModel[]) => !!items),
      map((items) => items.slice(0, 5))
    );
  }

  private addMoreItems(): void {
    this.paginatedItems$ = this.itemsFacade.items$.pipe(
      filter((items: ItemsModel[]) => !!items),
      map((items) => items.slice(0, this.numberOfITems))
    );

    this.numberOfITems = this.numberOfITems + 5;
  }
}

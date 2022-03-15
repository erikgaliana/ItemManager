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
import { ItemsModel } from '@item-manager/items-module';

// Models

@Component({
  selector: 'item-manager-item-list',
  templateUrl: './item-list.view.html',
  styleUrls: ['./item-list.view.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemListViewComponent implements OnInit, OnDestroy {
  originalItemList: ItemsModel[] = [];
  paginatedItems: ItemsModel[] = [];
  filteredItems: ItemsModel[] = [];
  itemsLoaded = 5;

  private destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(public itemsFacade: ItemsFacade) {}

  ngOnInit(): void {
    this.itemsFacade.loadItemsData();
    this.setOriginalItemList();
  }

  ngOnDestroy(): void {
    this.finishDestroyedSubscription();
  }

  doInfinite(event: any): void {
    if (this.paginatedItems?.length >= this.originalItemList?.length) {
      event.target.disabled = true;
      return;
    }

    this.addItems();
    event.target.complete();
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    // const val = ev.target.value.toLowerCase();
    // if (val && val.trim() === '') {
    //   this.filteredItems = this.itemsFacade.items$;
    //   return;
    // }
    // this.filteredItems$
    //   .pipe(filter((items: ItemsModel[]) => !!items))
    //   .subscribe(
    //     (items) =>
    //       (this.filteredItems = items.filter((item) =>
    //         item.title.toLowerCase().includes(val)
    //       ))
    //   );
  }

  segmentChanged(event: any): void {
    console.log(event.detail.value);
  }

  private finishDestroyedSubscription(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  private setOriginalItemList(): void {
    this.itemsFacade.items$
      .pipe(
        filter((items) => !!items),
        take(1)
      )
      .subscribe((items) => {
        this.originalItemList = [...items];
        this.addItems();
      });
  }

  private addItems(): void {
    console.log('before pagination', this.paginatedItems);
    this.paginatedItems = this.originalItemList.slice(0, this.itemsLoaded);
    this.itemsLoaded += 5;
    console.log('afetr', this.paginatedItems);
  }
}

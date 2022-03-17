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
import { ItemsModel } from '@item-manager/items-models';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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
  searchText = '';
  keyword = 'title';

  private destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public itemsFacade: ItemsFacade,
    private sanitizer: DomSanitizer
  ) {}

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

  getItems(event: any) {
    this.searchText = event.target.value;
  }

  segmentChanged(event: any): void {
    console.log(event.detail.value);
    this.keyword = event.detail.value;
  }

  getImgContent(image: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(image);
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

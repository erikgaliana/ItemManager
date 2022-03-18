// Angular
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

// Rxjs
import { filter, Subject, take } from 'rxjs';

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

  doInfinite(eventInfinite: any): void {
    if (this.paginatedItems?.length >= this.originalItemList?.length) {
      eventInfinite.target.disabled = true;
      return;
    }

    this.addItems();
    eventInfinite.target.complete();
  }

  getItems(eventSearch: any) {
    this.searchText = eventSearch.target.value;
  }

  segmentChanged(eventSegment: any): void {
    this.keyword = eventSegment.detail.value;
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
    this.paginatedItems = this.originalItemList.slice(0, this.itemsLoaded);
    this.itemsLoaded += 5;
  }
}

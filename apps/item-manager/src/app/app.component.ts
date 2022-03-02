import { Component, OnInit } from '@angular/core';
import { ItemsFacade } from '@item-manager/items-services';

@Component({
  selector: 'item-manager-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'item-manager';
  constructor(private itemsFacade: ItemsFacade) {}

  ngOnInit(): void {
    this.itemsFacade.loadItemsData();
  }
}

// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '@item-manager/items-pipes';

// Store
import { ItemsFacade, ItemsStoreModule } from '@item-manager/items-services';

// Routing
import { ItemListRoutingModule } from './item-list-routing.module';

// Views
import { ItemListViewComponent } from './views/item-list.view';

@NgModule({
  declarations: [ItemListViewComponent],
  imports: [
    CommonModule,
    ItemListRoutingModule,
    IonicModule,
    ItemsStoreModule,
    PipesModule,
  ],
  providers: [ItemsFacade],
})
export class ItemListModule {}

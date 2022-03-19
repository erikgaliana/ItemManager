// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Ionic
import { IonicModule } from '@ionic/angular';

// Store
import { ItemsFacade, ItemsStoreModule } from '@item-manager/items-services';
import { FabModalModule } from '../fab-modal/fab-modal.module';

// Pipes
import { PipesModule } from '@item-manager/items-pipes';

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
    FabModalModule,
  ],
  providers: [ItemsFacade],
})
export class ItemListModule {}

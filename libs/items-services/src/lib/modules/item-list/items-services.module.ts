import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromItemsServices from './modules/item-list/items-services.reducer';
import { ItemsServicesEffects } from './modules/item-list/items-services.effects';
import { ItemsServicesFacade } from './modules/item-list/items-services.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromItemsServices.ITEMS_SERVICES_FEATURE_KEY,
      fromItemsServices.reducer
    ),
    EffectsModule.forFeature([ItemsServicesEffects]),
  ],
  providers: [ItemsServicesFacade],
})
export class ItemsServicesModule {}

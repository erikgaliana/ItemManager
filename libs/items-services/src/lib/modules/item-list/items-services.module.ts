// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Store
import { itemsReducers } from './store/reducers/reducer-map';
import { ItemsFacade } from './facade/items-services.facade';
import { ItemsEffects } from './store/effects/items-services.effects';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('items', itemsReducers),
    EffectsModule.forFeature([ItemsEffects]),
  ],
  providers: [ItemsFacade],
})
export class ItemsStoreModule {}

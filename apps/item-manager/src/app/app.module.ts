// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// NgRx
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Store
import { ItemsFacade, ItemsStoreModule } from '@item-manager/items-services';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ItemsStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 30,
    }),
  ],
  providers: [ItemsFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}

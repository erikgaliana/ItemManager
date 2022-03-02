import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as ItemsServicesActions from './items-services.actions';
import { ItemsServicesEffects } from './items-services.effects';
import { ItemsServicesFacade } from './items-services.facade';
import { ItemsServicesEntity } from '../../../models/items-services.models';
import {
  ITEMS_SERVICES_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './items-services.reducer';
import * as ItemsServicesSelectors from '../items-services.selectors';

interface TestSchema {
  itemsServices: State;
}

describe('ItemsServicesFacade', () => {
  let facade: ItemsServicesFacade;
  let store: Store<TestSchema>;
  const createItemsServicesEntity = (
    id: string,
    name = ''
  ): ItemsServicesEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(ITEMS_SERVICES_FEATURE_KEY, reducer),
          EffectsModule.forFeature([ItemsServicesEffects]),
        ],
        providers: [ItemsServicesFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(ItemsServicesFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allItemsServices$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allItemsServices$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadItemsServicesSuccess` to manually update list
     */
    it('allItemsServices$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allItemsServices$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        ItemsServicesActions.loadItemsServicesSuccess({
          itemsServices: [
            createItemsServicesEntity('AAA'),
            createItemsServicesEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allItemsServices$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});

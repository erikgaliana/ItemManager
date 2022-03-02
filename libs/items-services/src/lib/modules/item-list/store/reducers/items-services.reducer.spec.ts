import { Action } from '@ngrx/store';

import * as ItemsServicesActions from './items-services.actions';
import { ItemsServicesEntity } from '../../../../models/items-services.models';
import { State, initialState, reducer } from './items-services.reducer';

describe('ItemsServices Reducer', () => {
  const createItemsServicesEntity = (
    id: string,
    name = ''
  ): ItemsServicesEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid ItemsServices actions', () => {
    it('loadItemsServicesSuccess should return the list of known ItemsServices', () => {
      const itemsServices = [
        createItemsServicesEntity('PRODUCT-AAA'),
        createItemsServicesEntity('PRODUCT-zzz'),
      ];
      const action = ItemsServicesActions.loadItemsServicesSuccess({
        itemsServices,
      });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

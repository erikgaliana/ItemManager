import { ItemsServicesEntity } from '../../../../models/items-services.models';
import {
  itemsServicesAdapter,
  ItemsServicesPartialState,
  initialState,
} from './items-services.reducer';
import * as ItemsServicesSelectors from './items-services.selectors';

describe('ItemsServices Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getItemsServicesId = (it: ItemsServicesEntity) => it.id;
  const createItemsServicesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ItemsServicesEntity);

  let state: ItemsServicesPartialState;

  beforeEach(() => {
    state = {
      itemsServices: itemsServicesAdapter.setAll(
        [
          createItemsServicesEntity('PRODUCT-AAA'),
          createItemsServicesEntity('PRODUCT-BBB'),
          createItemsServicesEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('ItemsServices Selectors', () => {
    it('getAllItemsServices() should return the list of ItemsServices', () => {
      const results = ItemsServicesSelectors.getAllItemsServices(state);
      const selId = getItemsServicesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = ItemsServicesSelectors.getSelected(
        state
      ) as ItemsServicesEntity;
      const selId = getItemsServicesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getItemsServicesLoaded() should return the current "loaded" status', () => {
      const result = ItemsServicesSelectors.getItemsServicesLoaded(state);

      expect(result).toBe(true);
    });

    it('getItemsServicesError() should return the current "error" state', () => {
      const result = ItemsServicesSelectors.getItemsServicesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

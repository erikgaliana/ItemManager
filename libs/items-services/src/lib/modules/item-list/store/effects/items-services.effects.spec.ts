import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as ItemsServicesActions from './items-services.actions';
import { ItemsServicesEffects } from './items-services.effects';

describe('ItemsServicesEffects', () => {
  let actions: Observable<Action>;
  let effects: ItemsServicesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ItemsServicesEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ItemsServicesEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ItemsServicesActions.init() });

      const expected = hot('-a-|', {
        a: ItemsServicesActions.loadItemsServicesSuccess({ itemsServices: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

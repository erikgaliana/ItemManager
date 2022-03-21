// Angular
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Models
import { ItemsModel } from '@item-manager/items-models';

// Store
import { ItemsFacade, ItemsStoreModule } from '@item-manager/items-services';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

// Views
import { FabModalModule } from '../fab-modal/fab-modal.module';
import { ItemListViewComponent } from './views/item-list.view';

const ItemsTestList: ItemsModel[] = [
  {
    title: 'test title',
    description: 'test descrioption',
    price: 'test price',
    email: 'test email',
    image: 'test image',
  },
];

describe('Item List Component', () => {
  let component: ItemListViewComponent;
  let fixture: ComponentFixture<ItemListViewComponent>;
  let service: ItemsFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ItemsStoreModule,
        FabModalModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
      ],
      declarations: [ItemListViewComponent],
      providers: [ItemsFacade],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = fixture.debugElement.injector.get(ItemsFacade);
    jest
      .spyOn(service, 'loadItemsData')
      .mockImplementation(() => ItemsTestList);
  });

  afterEach(() => {
    fixture.destroy();
    jest.resetAllMocks();
  });

  it('should create the item list component', () => {
    expect(component).toBeTruthy();
  });

  it('adds favorite', () => {
    const itemTest: ItemsModel = {
      title: 'test title',
      description: 'test descrioption',
      price: 'test price',
      email: 'test email',
      image: 'test image',
    };

    const spyAddFab = jest
      .spyOn(service, 'addFab')
      .mockImplementation(() => null);

    component.addFab(itemTest);

    expect(spyAddFab).toHaveBeenCalled();
  });
});

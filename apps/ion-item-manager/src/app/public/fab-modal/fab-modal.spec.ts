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
import { FabModalModule } from './fab-modal.module';
import { FabModalComponent } from './views/fab-modal.page';

describe('Modal Fab Component', () => {
  let component: FabModalComponent;
  let fixture: ComponentFixture<FabModalComponent>;
  let service: ItemsFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ItemsStoreModule,
        FabModalModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
      ],
      declarations: [FabModalComponent],
      providers: [ItemsFacade],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FabModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = fixture.debugElement.injector.get(ItemsFacade);
  });

  afterEach(() => {
    fixture.destroy();
    jest.resetAllMocks();
  });

  it('should create the fab modal component', () => {
    expect(component).toBeTruthy();
  });

  it('deletes faborite', () => {
    const itemIndex = 0;

    const spyDelFab = jest
      .spyOn(service, 'deleteFab')
      .mockImplementation(() => null);

    component.deleteFab(itemIndex);

    expect(spyDelFab).toHaveBeenCalled();
  });
});

// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Views
import { ItemListViewComponent } from './views/item-list.view';

const routes: Routes = [
  {
    path: '',
    component: ItemListViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemListRoutingModule {}

// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ionic
import { IonicModule } from '@ionic/angular';

// Views
import { FabModalComponent } from './views/fab-modal.page';
import { PipesModule } from '@item-manager/items-pipes';

@NgModule({
  declarations: [FabModalComponent],
  imports: [CommonModule, IonicModule, PipesModule],
  exports: [FabModalComponent],
})
export class FabModalModule {}

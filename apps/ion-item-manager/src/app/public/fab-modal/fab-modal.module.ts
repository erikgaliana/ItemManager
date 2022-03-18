// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ionic
import { IonicModule } from '@ionic/angular';

// Views
import { FabModalComponent } from './views/fab-modal.page';

@NgModule({
  declarations: [FabModalComponent],
  imports: [CommonModule, IonicModule],
  exports: [FabModalComponent],
})
export class FabModalModule {}

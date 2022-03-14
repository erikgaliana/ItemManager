// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ionic
import { IonicModule } from '@ionic/angular';

// Views
import { ShellViewComponent } from './views/shell.page';

@NgModule({
  declarations: [ShellViewComponent],
  imports: [CommonModule, IonicModule],
  exports: [ShellViewComponent],
})
export class ShellComponentModule {}

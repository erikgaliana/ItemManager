import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PublicRoutingModule } from './public-routing.module';
import { PublicViewComponent } from './public.component';
import { ShellComponentModule } from './shell/shell.module';

@NgModule({
  declarations: [PublicViewComponent],
  imports: [PublicRoutingModule, IonicModule, ShellComponentModule],
})
export class PublicModule {}

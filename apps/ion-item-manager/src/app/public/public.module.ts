import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ItemsFacade } from '@item-manager/items-services';
import { PublicRoutingModule } from './public-routing.module';
import { PublicViewComponent } from './public.component';
import { ShellComponentModule } from './shell/shell.module';

@NgModule({
  declarations: [PublicViewComponent],
  imports: [PublicRoutingModule, IonicModule, ShellComponentModule],
  providers: [ItemsFacade],
})
export class PublicModule {}

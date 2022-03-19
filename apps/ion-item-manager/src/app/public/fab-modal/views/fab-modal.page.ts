// Angular
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

// Ionic
import { ModalController } from '@ionic/angular';

// Store
import { ItemsFacade } from '@item-manager/items-services';

@Component({
  selector: 'item-manager-fab-modal',
  templateUrl: './fab-modal.page.html',
  styleUrls: ['./fab-modal.page.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FabModalComponent {
  constructor(
    public itemsFacade: ItemsFacade,
    private modalCtrl: ModalController,
    private sanitizer: DomSanitizer
  ) {}

  trackByItems(index: number, item: any): number {
    return item.id;
  }

  deleteFab(i: number): void {
    this.itemsFacade.deleteFab(i);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  getImgContent(image: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(image);
  }
}

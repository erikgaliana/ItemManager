// Angular
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'item-manager-fab-modal',
  templateUrl: './fab-modal.page.html',
  styleUrls: ['./fab-modal.page.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FabModalComponent {}

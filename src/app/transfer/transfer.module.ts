import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewTransferComponent } from './pt-review-transfer/pt-review-transfer.component';
import { TransactionListComponent } from './pt-transaction-list/pt-transaction-list.component';
import { TransferComponent } from './pt-transfer/pt-transfer.component';
import { TransferOverviewComponent } from './pt-transfer-overview.component';
import { FormsModule } from '@angular/forms';
import { BbUIModule } from '../bb-ui/bb-ui.module';
import { SharedModule } from '../shared/shared.module';

const COMPONENTS = [
  TransferComponent,
  TransactionListComponent,
  ReviewTransferComponent,
  TransferOverviewComponent,
];
@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, FormsModule, BbUIModule, SharedModule],
  exports: COMPONENTS,
})
export class TransferModule {}

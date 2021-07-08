import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewTransferComponent } from './pt-review-transfer/pt-review-transfer.component';
import { TransactionListComponent } from './pt-transaction-list/pt-transaction-list.component';
import { TransferComponent } from './pt-transfer/pt-transfer.component';
import { TransferOverviewComponent } from './pt-transfer-overview.component';



@NgModule({
  declarations: [TransferComponent, TransactionListComponent, ReviewTransferComponent, TransferOverviewComponent],
  imports: [
    CommonModule
  ],
  exports: [TransferComponent, TransactionListComponent, ReviewTransferComponent, TransferOverviewComponent],
})
export class TransferModule { }

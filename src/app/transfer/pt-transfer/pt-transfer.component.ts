import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IReviewData, ITransactions } from 'src/app/shared/interfaces/shared';
import { Transfer } from 'src/app/shared/models/transfer';
import { TransactionService } from 'src/app/shared/services/transaction.service';
import { ReviewTransferComponent } from '../pt-review-transfer/pt-review-transfer.component';

@Component({
  selector: 'pt-transfer',
  templateUrl: './pt-transfer.component.html',
})
export class TransferComponent implements OnInit {
  title = '<b>Make</b> Transfer';
  icon = 'folder';
  transferModel = new Transfer('', '', '');
  sourceAccountData: ITransactions;
  sourceAccountBalance: number;

  constructor(
    private transactionService: TransactionService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.fetchSourceAccountData();
  }

  /**
   * fetches the source account details
   */
  fetchSourceAccountData(): void {
    this.transactionService.getSourceAccount().subscribe(
      (res) => {
        this.sourceAccountData = res;
        this.sourceAccountBalance = Number(this.sourceAccountData.transaction.amountCurrency.amount);
        this.transferModel.fromAccount = `${this.sourceAccountData.merchant.name}: € ${this.sourceAccountBalance}`;
      }
    );
  }
/**
 *
 * @param transferForm
 * opens review modal with transfer modal details
 * on sumbit, post the transaction, closes the modal and clear the transfer form
 */
  onSubmit(transferForm: NgForm): void {
    const modalRef = this.modalService.open(ReviewTransferComponent);
    const data = {
      toAccount: this.transferModel.toAccount,
      amount: this.transferModel.amount,
    };
    modalRef.componentInstance.data = data;
    modalRef.result.then((result) => {
      if (result === 'send') {
        this.transactionService.postTransaction(this.transferModel);
        transferForm.reset({
          fromaccount: `${this.sourceAccountData.merchant.name}: € ${this.sourceAccountBalance}`,
        });
      }
    });
  }
}

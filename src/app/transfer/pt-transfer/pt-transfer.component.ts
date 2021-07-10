import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  sourceAccountData;
  sourceAccountBalance:number;
  
  constructor(
    private transactionService: TransactionService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.fetchSourceAccountData();
  }

  fetchSourceAccountData() {
    this.transactionService.getSourceAccount().subscribe(
      (res) => {
        this.sourceAccountData = res;
        this.sourceAccountBalance = this.sourceAccountData.transaction.amountCurrency.amount;
        this.transferModel.fromAccount = `${this.sourceAccountData.merchant.name}: € ${this.sourceAccountBalance}`;
      },
      () => {
        this.sourceAccountData = {};
      }
    );
  }

  onSubmit(transferForm) {
    const modalRef = this.modalService.open(ReviewTransferComponent);
    let data = {
      toAccount: this.transferModel.toAccount,
      amount: this.transferModel.amount,
    };
    modalRef.componentInstance.data = data;
    modalRef.result.then(
      (result) => {
        if(result === 'send') {
           this.transactionService.postTransaction(this.transferModel);
           this.transferModel.clear();
           transferForm.reset();
        }
      }
    );
  }
}

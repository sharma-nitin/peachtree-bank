import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/shared/services/transaction.service';

@Component({
  selector: 'pt-transaction-list',
  templateUrl: './pt-transaction-list.component.html'
})
export class TransactionListComponent implements OnInit {
  title = 'Transactions <b>List</b>';
  icon = 'menu';
  searchKey = '';
  transactions = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.fetchTransactions();
  }

  fetchTransactions(): void {
    this.transactionService.getTransactions();
    this.transactionService.transactions$.subscribe(
      (res) => {
       this.transactions = [...this.transactions, ...res];
      },
      () => {
        this.transactions = [];
      });

  }

  randomHexColor = () => {
    const n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  }

  trackByDate(index, item): number | string{
    return item.dates.valueDate;
 }

 onFilter(event): void {
   this.searchKey = event;
 }

}

import { Component, OnInit } from '@angular/core';
import { ITransactions } from 'src/app/shared/interfaces/shared';
import { TransactionService } from 'src/app/shared/services/transaction.service';

@Component({
  selector: 'pt-transaction-list',
  templateUrl: './pt-transaction-list.component.html',
})
export class TransactionListComponent implements OnInit {
  title = 'Transactions <b>List</b>';
  icon = 'menu';
  searchKey = '';
  transactions:Array<ITransactions> = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.fetchTransactions();
  }

  /**
   * fetches the transactions list
   */
  fetchTransactions(): void {
    this.transactionService.getTransactions();
    this.transactionService.transactions$.subscribe(
      (res) => {
        this.transactions = [...this.transactions, ...res];
      },
      () => {
        this.transactions = [];
      }
    );
  }

  /**
   *
   * @returns random hex colour code
   */
  randomHexColor = () => {
    const n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  }

  /**
   *
   * @param index transaction list item index
   * @param item transaction item
   * @returns unique date value for trackby
   */
  trackByDate(index: number, item:ITransactions): number | string {
    return item.dates.valueDate;
  }

  /**
   *
   * @param event search field value
   */
  onFilter(event: string): void {
    this.searchKey = event;
  }
}

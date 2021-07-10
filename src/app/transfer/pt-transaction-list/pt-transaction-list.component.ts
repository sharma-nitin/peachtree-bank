import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/shared/services/transaction.service';
import * as moment from 'moment';

@Component({
  selector: 'pt-transaction-list',
  templateUrl: './pt-transaction-list.component.html'
})
export class TransactionListComponent implements OnInit {
  title = 'Transactions <b>List</b>';
  icon='menu';
  searchKey = '';
  transactions = [];

  constructor(private transactionService:TransactionService,) { }

  ngOnInit(): void {
    this.fetchTransactions();
  }

  fetchTransactions() {
    this.transactionService.getTransactions().subscribe(
    (res)=>{
     this.transactions = res.data;
    },
    ()=>{
      this.transactions =[];
    })
  }

  randomHexColor = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

  trackByDate(index, item){
    return moment(item.dates.valueDate).valueOf();
 }

 onFilter(event) {
   this.searchKey = event;
 }

}

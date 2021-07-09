import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pt-transaction-list',
  templateUrl: './pt-transaction-list.component.html'
})
export class TransactionListComponent implements OnInit {
  title = 'Transactions <b>List</b>';
  icon='menu';
  constructor() { }

  ngOnInit(): void {
  }

}

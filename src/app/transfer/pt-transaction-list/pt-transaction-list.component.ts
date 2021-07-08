import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pt-transaction-list',
  templateUrl: './pt-transaction-list.component.html'
})
export class TransactionListComponent implements OnInit {
  title = 'Transactions List'
  constructor() { }

  ngOnInit(): void {
  }

}

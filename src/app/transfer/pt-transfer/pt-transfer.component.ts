import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pt-transfer',
  templateUrl: './pt-transfer.component.html'
})
export class TransferComponent implements OnInit {
  transfer;
  title = 'Make Transfer'
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event) {

  }

}

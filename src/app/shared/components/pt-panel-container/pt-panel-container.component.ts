import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pt-panel-container',
  templateUrl: './pt-panel-container.component.html'
})
export class PanelContainerComponent implements OnInit {
@Input() title = '';

  constructor() { }

  ngOnInit(): void {
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BbUIModule } from './bb-ui/bb-ui.module';
import { TransferModule } from './transfer/transfer.module';
import { SharedModule } from './shared/shared.module';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {  NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BbUIModule,
    TransferModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    NgbActiveModal,
    NgbModal,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

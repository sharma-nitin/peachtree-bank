import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { source_account } from '../models/transfer';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getSourceAccount = (): Observable<any> => {
    return of(source_account);
  }

   getTransactions = (): Observable<any> => {
    return this.http.get<any[]>("https://r9vdzv10vd.execute-api.eu-central-1.amazonaws.com/dev/transactions");
  }
}

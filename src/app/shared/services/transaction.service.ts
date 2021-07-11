import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { sourceAccount } from '../models/transfer';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  localUrl = 'assets/mock-data/transactions.json';
  constructor(private http: HttpClient) { }

  private transactions = new Subject<any>();
  transactions$ = this.transactions.asObservable();

  getSourceAccount = (): Observable<any> => {
    return of(sourceAccount);
  }

   getTransactions = () => {
    this.http.get<any[]>(this.localUrl).subscribe(
      (res: any) => {
        this.transactions.next(res.data);
       },
       () => {
         this.transactions.next([]);
       });
  }

  postTransaction = (data) => {
    const payload = {
      categoryCode: '#15238',
      dates: {
        valueDate: new Date().getTime()
      },
      transaction: {
        amountCurrency: {
          amount: data.amount,
          currencyCode: 'EUR'
        },
        type: 'Online Transfer',
        creditDebitIndicator: 'DBIT'
      },
      merchant: {
        name: data.toAccount,
        accountNumber: 'PX64397745065188826'
      }
    };
    this.transactions.next([payload]);

  }
}

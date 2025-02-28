import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private apiUrl = 'http://localhost:5000/api/transactions';

  constructor(private http: HttpClient) {}

  addTransaction(transaction: Transaction) {
    return this.http.post(`${this.apiUrl}/add`, transaction);
  }

  getTransactions(userId: string) {
    return this.http.get<Transaction[]>(`${this.apiUrl}/${userId}`);
  }
}

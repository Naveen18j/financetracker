import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'http://localhost:5000/api/transactions'; // Backend URL

  constructor(private http: HttpClient) {}

  // Fetch all transactions
  getTransactions(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Add a new transaction
  addTransaction(transaction: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, transaction);
  }
}

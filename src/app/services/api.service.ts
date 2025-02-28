import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/transactions`);
  }

  addTransaction(transaction: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/transactions`, transaction);
  }
}

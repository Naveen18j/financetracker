import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  transactions: Transaction[] = [];
  transaction: Transaction = { userId: '', type: 'expense', amount: 0, category: '', date: new Date() };

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    const userId = 'USER_ID'; // Get from localStorage after login
    this.transactionService.getTransactions(userId).subscribe((data) => {
      this.transactions = data;
    });
  }

  addTransaction() {
    this.transaction.userId = 'USER_ID'; // Replace with logged-in user
    this.transactionService.addTransaction(this.transaction).subscribe(() => {
      alert('Transaction Added!');
      this.ngOnInit(); // Refresh transaction list
    });
  }
}

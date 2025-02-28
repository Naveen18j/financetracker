import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export class ReportsComponent implements OnInit {
  transactions: any[] = [];
  income: number = 0;
  expenses: number = 0;
  incomeExpenseChart: any;
  monthlyTrendsChart: any;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.fetchTransactions();
  }

  fetchTransactions() {
    this.transactionService.getTransactions().subscribe((data) => {
      this.transactions = data;
      this.calculateIncomeExpenses();
      this.renderCharts();
    });
  }

  calculateIncomeExpenses() {
    this.income = this.transactions
      .filter((t) => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);

    this.expenses = this.transactions
      .filter((t) => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
  }

  renderCharts() {
    // Destroy previous instances to prevent duplicate charts
    if (this.incomeExpenseChart) this.incomeExpenseChart.destroy();
    if (this.monthlyTrendsChart) this.monthlyTrendsChart.destroy();

    // 📊 Pie Chart (Income vs Expense)
    this.incomeExpenseChart = new Chart('incomeExpenseChart', {
      type: 'pie',
      data: {
        labels: ['Income', 'Expense'],
        datasets: [
          {
            data: [this.income, this.expenses],
            backgroundColor: ['#4CAF50', '#FF5733'], // Green for income, Red for expenses
          },
        ],
      },
    });

    // 📊 Bar Chart (Monthly Trends)
    this.monthlyTrendsChart = new Chart('monthlyTrendsChart', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Dummy months
        datasets: [
          {
            label: 'Income',
            data: [500, 800, 600, 700, 1000, 1200], // Replace with real data
            backgroundColor: '#4CAF50',
          },
          {
            label: 'Expense',
            data: [300, 400, 500, 600, 700, 900], // Replace with real data
            backgroundColor: '#FF5733',
          },
        ],
      },
    });
  }
}

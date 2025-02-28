export interface Transaction {
    _id?: string;
    userId: string;
    type: 'income' | 'expense';
    amount: number;
    category: string;
    date: Date;
  }
  
// client/src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import { getTransactions } from '../services/api';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const { data } = await getTransactions();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };
    fetchTransactions();
  }, []);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-4">Finance Tracker</h1>
      <TransactionForm onTransactionAdded={addTransaction} />
      <TransactionList transactions={transactions} setTransactions={setTransactions} />
    </div>
  );
};

export default Dashboard;

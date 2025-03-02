// client/src/components/TransactionList.jsx
import React from 'react';
import { deleteTransaction } from '../services/api';

const TransactionList = ({ transactions, setTransactions }) => {
  const handleDelete = async (id) => {
    try {
      await deleteTransaction(id);
      setTransactions(transactions.filter(t => t._id !== id));
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      {transactions.map(tx => (
        <div key={tx._id} className="flex justify-between items-center border p-2 my-2 rounded">
          <div>
            <h3 className="font-bold">{tx.description}</h3>
            <p>
              {tx.type === 'expense' ? '-' : '+'}${tx.amount}
            </p>
          </div>
          <button onClick={() => handleDelete(tx._id)} className="text-red-500">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;

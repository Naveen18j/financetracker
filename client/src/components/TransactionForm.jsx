// client/src/components/TransactionForm.jsx
import React, { useState } from 'react';
import { createTransaction } from '../services/api';

const TransactionForm = ({ onTransactionAdded }) => {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    type: 'expense'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createTransaction(formData);
      onTransactionAdded(data);
      setFormData({ description: '', amount: '', type: 'expense' });
    } catch (error) {
      console.error('Error creating transaction:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow max-w-md mx-auto">
      <div className="mb-4">
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label>Amount</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label>Type</label>
        <select name="type" value={formData.type} onChange={handleChange} className="border p-2 w-full">
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;

import React, { useState } from "react";
import { createTransaction } from "../services/api";

const TransactionForm = ({ onTransactionAdded }) => {
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    type: "expense",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createTransaction(formData);
      onTransactionAdded(data);
      setFormData({ description: "", amount: "", type: "expense" });
    } catch (error) {
      console.error("Error creating transaction:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem", padding: "1rem", border: "1px solid #ddd", borderRadius: "4px" }}>
      <div>
        <label>Description:</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} required />
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
      </div>
      <div>
        <label>Type:</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;

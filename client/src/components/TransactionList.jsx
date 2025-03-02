import React from "react";
import { deleteTransaction } from "../services/api";

const TransactionList = ({ transactions, setTransactions }) => {
  const handleDelete = async (id) => {
    try {
      await deleteTransaction(id);
      setTransactions(transactions.filter((t) => t._id !== id));
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  return (
    <div>
      {transactions.map((tx) => (
        <div key={tx._id} style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem", borderBottom: "1px solid #ccc" }}>
          <div>
            <strong>{tx.description}</strong> ({tx.type}) - ${tx.amount}
          </div>
          <button onClick={() => handleDelete(tx._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;

import React, { useEffect, useState } from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import MonthlySummary from "../components/MonthlySummary";
import { getTransactions } from "../services/api";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const { data } = await getTransactions();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTransactions();
  }, []);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  return (
    <div style={styles.background}>
      <div style={styles.overlay}>
        <div style={styles.glassContainer}>
          <h1 style={styles.header}></h1>
          <MonthlySummary transactions={transactions} />
          <div style={styles.contentWrapper}>
            <div style={styles.formCard}>
              <TransactionForm onTransactionAdded={addTransaction} />
            </div>
            <div style={styles.listCard}>
              {loading ? (
                <p>Loading transactions...</p>
              ) : (
                <TransactionList
                  transactions={transactions}
                  setTransactions={setTransactions}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  background: {
    backgroundImage: "url('/images/bg.png.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    padding: "2rem 0",
  },
  overlay: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  // Glass-like container with blur and padding
  glassContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    padding: "2rem",
    borderRadius: "8px",
    maxWidth: "1000px",
    width: "90%",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "1.5rem",
    fontSize: "2rem",
  },
  contentWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
  },
  formCard: {
    flex: "1 1 300px",
    backgroundColor: "#fff",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  listCard: {
    flex: "2 1 600px",
    backgroundColor: "#fff",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default Dashboard;

import React from "react";

const MonthlySummary = ({ transactions }) => {
  // Group transactions by month and year
  const groups = {};
  transactions.forEach((tx) => {
    const date = new Date(tx.date);
    // Create a key in the format "Month Year" (e.g., "March 2025")
    const monthYear = date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    if (!groups[monthYear]) {
      groups[monthYear] = { income: 0, expense: 0 };
    }
    if (tx.type === "income") {
      groups[monthYear].income += tx.amount;
    } else if (tx.type === "expense") {
      groups[monthYear].expense += tx.amount;
    }
  });

  // Sort the groups by date
  const sortedKeys = Object.keys(groups).sort((a, b) => new Date(a) - new Date(b));

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
      {sortedKeys.map((monthYear) => {
        const { income, expense } = groups[monthYear];
        const savings = income - expense;
        return (
          <div
            key={monthYear}
            className="month-summary"
            style={{
              position: "relative",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "8px",
              backgroundColor: "#fff",
              cursor: "pointer",
              minWidth: "150px",
            }}
          >
            <strong>{monthYear}</strong>
            <div className="tooltip" style={{
              display: "none",
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              padding: "0.5rem",
              background: "#333",
              color: "#fff",
              borderRadius: "4px",
              whiteSpace: "nowrap",
              zIndex: 10,
            }}>
              Income: ₹.{income.toFixed(2)}<br />
              Expense: ₹.{expense.toFixed(2)}<br />
              Savings: ₹.{savings.toFixed(2)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MonthlySummary;

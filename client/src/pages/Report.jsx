import React, { useState } from "react";
import { downloadReport } from "../services/api";

const Report = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setError("");
    if (!from || !to) {
      setError("Please select both 'from' and 'to' dates.");
      return;
    }
    setLoading(true);
    try {
      const response = await downloadReport(from, to);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "report.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      setError(err.response?.data?.error || "Failed to download report");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="report-container"
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        padding: "1.5rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ marginBottom: "1rem" }}>Download Report (PDF)</h2>
      <p style={{ marginBottom: "1rem", color: "#555" }}>
        Select a date range to download a PDF report of your transactions.
      </p>
      {error && (
        <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>
      )}
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          From:
        </label>
        <input
          type="date"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          To:
        </label>
        <input
          type="date"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <button
        onClick={handleDownload}
        style={{
          width: "100%",
          padding: "0.75rem",
          backgroundColor: "#007acc",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
        disabled={loading}
      >
        {loading ? "Downloading..." : "Download PDF Report"}
      </button>
    </div>
  );
};

export default Report;

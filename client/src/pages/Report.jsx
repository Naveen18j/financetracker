import React, { useState } from "react";
import axios from "axios";

const Report = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [error, setError] = useState("");

  const handleDownload = async () => {
    setError("");
    if (!from || !to) {
      setError("Please select both 'from' and 'to' dates.");
      return;
    }

    try {
      // Request the CSV report from the server
      const response = await axios.get(`http://localhost:5000/api/transactions/report?from=${from}&to=${to}`, {
        responseType: "blob", // Important for binary data (CSV file)
      });
      
      // Create a URL for the blob and trigger download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "report.csv");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      setError(err.response?.data?.error || "Failed to download report");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem" }}>
      <h2>Download Report</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div style={{ marginBottom: "1rem" }}>
        <label>From: </label>
        <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label>To: </label>
        <input type="date" value={to} onChange={(e) => setTo(e.target.value)} />
      </div>
      <button onClick={handleDownload}>Download CSV Report</button>
    </div>
  );
};

export default Report;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // if using react-router

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    // Basic front-end validation
    if (!formData.email || !formData.password) {
      setError("Please fill all fields.");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      // Save token to local storage or context
      localStorage.setItem("token", res.data.token);
      // Redirect to Dashboard
      navigate("/");
    } catch (err) {
      setError(err.response.data.error || "Login failed");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto", padding: "1rem", border: "1px solid #ddd", borderRadius: "4px" }}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

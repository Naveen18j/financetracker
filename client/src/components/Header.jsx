import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header style={{ padding: "1rem", backgroundColor: "#007acc", color: "#fff", marginBottom: "1rem" }}>
      <nav>
        {token ? (
          <>
            <Link to="/dashboard" style={{ marginRight: "1rem", color: "#fff", textDecoration: "none" }}>Dashboard</Link>
            <Link to="/report" style={{ marginRight: "1rem", color: "#fff", textDecoration: "none" }}>Report</Link>
            <button onClick={logout} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ marginRight: "1rem", color: "#fff", textDecoration: "none" }}>Login</Link>
            <Link to="/signup" style={{ color: "#fff", textDecoration: "none" }}>Signup</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

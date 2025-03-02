import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ padding: "1rem", backgroundColor: "#007acc", color: "#fff", marginBottom: "1rem" }}>
      <nav>
        <Link to="/" style={{ marginRight: "1rem", color: "#fff", textDecoration: "none" }}>Dashboard</Link>
        <Link to="/login" style={{ marginRight: "1rem", color: "#fff", textDecoration: "none" }}>Login</Link>
        <Link to="/signup" style={{ color: "#fff", textDecoration: "none" }}>Signup</Link>
      </nav>
    </header>
  );
};

export default Header;

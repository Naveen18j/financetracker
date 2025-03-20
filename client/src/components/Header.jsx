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
    <header
      style={{
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        padding: "1rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      }}
    >
      <nav>
        {token ? (
          <>
            <Link
              to="/dashboard"
              style={{ marginRight: "1rem", color: "#fff", textDecoration: "none" }}
            >
              DASHBOARD
            </Link>
            <Link
              to="/report"
              style={{ marginRight: "1rem", color: "#fff", textDecoration: "none" }}
            >
              REPORT
            </Link>
            <button
              onClick={logout}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "1.1rem",
                cursor: "pointer",
                transition: "transform 0.3s ease, text-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.textShadow = "0 2px 4px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.textShadow = "none";
              }}
            >
              LOGOUT
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              style={{ marginRight: "1rem", color: "#fff", textDecoration: "none" }}
            >
              LOGIN
            </Link>
            <Link
              to="/signup"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              SIGNUP
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

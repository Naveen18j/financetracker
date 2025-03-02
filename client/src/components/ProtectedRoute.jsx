import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Check if a token exists in localStorage (or use your auth context)
  const token = localStorage.getItem("token");
  if (!token) {
    // If no token, redirect to the login page
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;

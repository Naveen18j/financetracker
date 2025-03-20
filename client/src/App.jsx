import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Report from "./pages/Report";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Protected routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/report" element={
          <ProtectedRoute>
            <Report />
          </ProtectedRoute>
        } />
        {/* Optionally set a default route */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

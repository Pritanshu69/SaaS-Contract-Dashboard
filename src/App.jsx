import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      {/* Default redirect → Login */}
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={token ? <Dashboard /> : <Navigate to="/login" />}
      />

      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />

      {/* Catch all unknown routes */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

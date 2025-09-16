import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="p-4 bg-white shadow flex gap-4">
        <Link to="/" className="text-blue-600">Home</Link>
        <Link to="/about" className="text-blue-600">About</Link>
      </nav>
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}


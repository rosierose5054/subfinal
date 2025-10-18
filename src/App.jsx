import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import all pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Factories from "./pages/Factories";
import Premium from "./pages/Premium";
import NewsPage from "./pages/News";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Your completed pages */}
        <Route path="/" element={<Home />} />
        <Route path="/factories" element={<Factories />} />

        {/* Hawraa’s additional pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/news" element={<NewsPage />} /> {/* News page route */}
      </Routes>
    </Router>
  );
}

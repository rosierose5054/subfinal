import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import all pages
import Home from "./home.jsx";
import Factories from "./Factories.jsx";
import Login from "./pages/Login.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Premium from "./pages/Premium.jsx";
import NewsPage from "./pages/News.jsx";

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
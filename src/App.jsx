import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./home.jsx";
import Factories from "./Factories.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/factories" element={<Factories />} />
      </Routes>
    </Router>
  );
}

export default App;

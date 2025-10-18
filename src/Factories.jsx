import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Factories.css";
import factoriesData from "./Factories.json"; // ✅ Import your JSON file

const Factories = () => {
  const cities = ["Baghdad", "Basra", "Erbil", "Kirkuk", "Mosul"];
  const businessTypes = [
    "Retail and E-Commerce",
    "Handmade and Craft",
    "Food and Beverages",
    "Tech and Digital",
    "Healthcare",
    "Trades and Services",
    "Packaging and Materials",
    "Sustainability and Green",
  ];

  // Set initial city
  const [activeCity, setActiveCity] = useState("Baghdad");

  // Automatically set initial type based on first factory in the city
  const initialType =
    factoriesData.find((f) => f.governorate === activeCity)?.industryType ||
    "Retail and E-Commerce";
  const [activeType, setActiveType] = useState(initialType);

  const [searchQuery, setSearchQuery] = useState(""); // search state

  // Update city and activeType when city changes
  const handleCityChange = (city) => {
    setActiveCity(city);

    // pick first available type for the new city
    const cityFactory = factoriesData.find((f) => f.governorate === city);
    if (cityFactory) {
      setActiveType(cityFactory.industryType);
    } else {
      setActiveType(""); // fallback if city has no factories
    }
  };

  // Filter factories based on city, type, and search
  const filteredFactories = factoriesData
    .filter(
      (factory) =>
        factory.governorate?.toLowerCase() === activeCity.toLowerCase() &&
        (activeType === "" ||
          factory.industryType?.toLowerCase().includes(activeType.toLowerCase())) &&
        factory.name?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 3); // show only 3 cards

  return (
    <div className="factories-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/Wasl (4).png" alt="WASL Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/factories">Factories</Link>
          </li>
          <li>
            <a href="#premium">Premium</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Search + City Menu Bar */}
      <div className="menu-bar-wrapper">
        <input
          type="text"
          className="search-bar"
          placeholder="Search factories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="city-menu">
          {cities.map((city) => (
            <button
              key={city}
              className={`city-btn ${activeCity === city ? "active" : ""}`}
              onClick={() => handleCityChange(city)}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Business Type Pills */}
      <div className="business-types">
        {businessTypes.map((type) => (
          <button
            key={type}
            className={`type-btn ${activeType === type ? "active" : ""}`}
            onClick={() => setActiveType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Factories content */}
      <div className="factories-content">
        <div className="factories-grid">
          {filteredFactories.length > 0 ? (
            filteredFactories.map((factory, index) => (
              <div className="factory-card" key={index}>
                <img
                  src={factory.logoUrl || "https://via.placeholder.com/250x150"}
                  alt={factory.name}
                />
                <h3>{factory.name}</h3>
                <p>{factory.description}</p>

                <div className="card-buttons">
                  <button className="contact-btn">Contact</button>
                  <button className="info-btn">More Info</button>
                </div>
              </div>
            ))
          ) : (
            <p>No factories found for this category and city.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Factories;

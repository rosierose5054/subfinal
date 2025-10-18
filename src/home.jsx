import React, { useRef, useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const sliderRef = useRef(null);

  // === ⚡ Trigger Push Effect (for slide transitions) ===
  const triggerPush = (direction = "right") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slides = slider.querySelectorAll(".slide:not(.hero-slide)"); // exclude hero slide
    slides.forEach((slide) => {
      slide.classList.remove("push-right", "push-left"); // reset
    });

    void slider.offsetWidth; // force reflow

    slides.forEach((slide) => {
      slide.classList.add(direction === "right" ? "push-right" : "push-left");
    });
  };

  // === FIXED SMOOTH + PERFECT LOOPING SLIDER ===
  const slideRight = () => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const width = slider.clientWidth;
      const maxScroll = slider.scrollWidth - width;

      if (slider.scrollLeft + width >= maxScroll - 5) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const next = Math.round(slider.scrollLeft / width + 1) * width;
        slider.scrollTo({ left: next, behavior: "smooth" });
      }

      triggerPush("right");
    }
  };

  const slideLeft = () => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const width = slider.clientWidth;
      const maxScroll = slider.scrollWidth - width;

      if (slider.scrollLeft <= 5) {
        slider.scrollTo({ left: maxScroll, behavior: "smooth" });
      } else {
        const prev = Math.round(slider.scrollLeft / width - 1) * width;
        slider.scrollTo({ left: prev, behavior: "smooth" });
      }

      triggerPush("left");
    }
  };

  // === NEW: Start gears spinning after fall-in animation ===
  useEffect(() => {
    const gears = document.querySelectorAll(".hero-image .gear");

    gears.forEach((gear) => {
      gear.addEventListener(
        "animationend",
        () => {
          gear.classList.add("ready-to-spin");
        },
        { once: true }
      );
    });
  }, []);

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">
          <img src="/Wasl (4).png" alt="WASL Logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/factories">Factories</Link></li>
          <li><Link to="/Premium">Premium</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
        <div className="nav-buttons">
          <button className="btn-login">Login</button>
          <button className="btn-signin">Sign In</button>
        </div>
      </nav>

      <div className="slider-wrapper hover-arrows">
        <div className="slider-container" ref={sliderRef}>

          {/* Slide 1 */}
          <div className="slide hero-slide">
            <section className="hero-section">
              <h1 className="hero-title">Connect. Build. Succeed.</h1>
              <div className="hero-image">
                <img src="/Wasl (2) (1).png" alt="Hero" />
                <img src="/Wasl (6) (1).png" alt="Gear Orange" className="gear top-left gear1" />
                <img src="/Wasl (5) (1).png" alt="Gear Blue" className="gear top-left gear2" />
                <img src="/Wasl (7) (1).png" alt="Gear Red" className="gear top-left gear3" />
                <img src="/Wasl (6) (1).png" alt="Gear Orange" className="gear top-right gear4" />
                <img src="/Wasl (7) (1).png" alt="Gear Blue" className="gear top-right gear5" />
              </div>
            </section>
          </div>

          {/* Slide 2 */}
          <div className="slide">
            <div className="slide-placeholder">
              <video src="./bulp.webm" autoPlay muted loop playsInline></video>
            </div>
            <div className="slide-text-container">
              <h2 className="slide-title">Connect with Factories & Suppliers</h2>
              <p className="slide-paragraph">
                Find the right suppliers and companies to grow your business.
              </p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="slide">
            <div className="slide-text-container">
              <h2 className="slide-title">Find Your Supplier</h2>
              <p className="slide-paragraph">Locate factories and companies quickly on the map.</p>
            </div>
            <div className="slide-placeholder">
              <video src="/Map.webm" autoPlay muted loop playsInline></video>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="slide">
            <h2 className="slide-title">Latest News</h2>
            <p className="slide-paragraph">
              Get the latest updates on companies suppliers and industry trends.
            </p>
            <div className="slide-placeholder">
              <video src="/NEWS.webm" autoPlay muted loop playsInline></video>
            </div>
          </div>

          {/* Slide 5 */}
          <div className="slide">
            <div className="slide-placeholder contact-icon">
              <img src="/contact.png" alt="Contact Icon" />
            </div>
            <div className="slide-text-container">
              <h2 className="slide-title">Contact 24/7</h2>
              <p className="slide-paragraph">Reach out anytime for support or inquiries.</p>
            </div>
          </div>

          {/* Slide 6 */}
          <div className="slide premium-slide">
            <div className="slide-text-container">
              <h2 className="slide-title">Premium</h2>
              <p className="slide-paragraph">
                Unlock exclusive tools insights and access to top suppliers with premium.
              </p>
              <div className="premium-buttons">
                <Link to="/factories">
                  <button className="btn-login">Explore more</button>
                </Link>
                <button className="btn-signin">Add Your Factory</button>
              </div>
            </div>
            <div className="premium-container">
              <div className="premium-elements">
                <div className="premium-icon">
                  <video src="/Dimond.webm" autoPlay muted loop playsInline></video>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="arrow left-arrow" onClick={slideLeft}>&lt;</div>
        <div className="arrow right-arrow" onClick={slideRight}>&gt;</div>
      </div>
    </div>
  );
};

export default Home;
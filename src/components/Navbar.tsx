import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/Navbar.css";

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(window.scrollY);
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY < lastScrollY) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
    setLastScrollY(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNavbar ? "show" : "hide"}`}>
      <div className="navbar-top-layer">
        <Link to="/" className="navbar-icon">
          <img src="./src/assets/icon_mb.svg" alt="Home Icon" />
        </Link>
        <Link to="/" className="navbar-brand">
          Magandang Balita
        </Link>
      </div>
      <div className="navbar-divider"></div>
      <div className="navbar-bottom-layer">
        <ul className="navbar-list">
          <li
            className={`navbar-item ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`navbar-item ${
              location.pathname === "/archive" ? "active" : ""
            }`}
          >
            <Link to="/archive">Archive</Link>
          </li>
          <li
            className={`navbar-item ${
              location.pathname === "/subscribe" ? "active" : ""
            }`}
          >
            <Link to="/subscribe">Subscribe</Link>
          </li>
          <li
            className={`navbar-item ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className={`navbar-item ${
              location.pathname === "/contact" ? "active" : ""
            }`}
          >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

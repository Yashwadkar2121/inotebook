import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const collapseRef = useRef(null); // Reference for the collapse section
  let location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    closeNavbar(); // Close the navbar after logout
  };

  // Function to close the navbar
  const closeNavbar = () => {
    if (collapseRef.current.classList.contains("show")) {
      collapseRef.current.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={closeNavbar}>
          iNotebook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          ref={collapseRef}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
                onClick={closeNavbar} // Close navbar on click
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
                onClick={closeNavbar} // Close navbar on click
              >
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem("token") ? (
            <form className="d-flex">
              <Link
                className="btn btn-primary mx-1"
                to="/login"
                role="button"
                onClick={closeNavbar} // Close navbar on login
              >
                Login
              </Link>
              <Link
                className="btn btn-primary mx-1"
                to="/signup"
                role="button"
                onClick={closeNavbar} // Close navbar on signup
              >
                Signup
              </Link>
            </form>
          ) : (
            <button className="btn btn-primary" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

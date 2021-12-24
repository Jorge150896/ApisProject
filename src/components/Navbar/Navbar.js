import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
        <Link className="navbar-brand" to="/">
          {/* <img src={logo} className="navbar-logo" alt =""/> */}
          Store Project
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <div className="navbar-nav">
            <NavLink
              activeclassname="active"
              className="nav-item nav-link"
              exact="true"
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              activeclassname="active"
              className="nav-item nav-link"
              exact="true"
              to="/about"
            >
              About
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

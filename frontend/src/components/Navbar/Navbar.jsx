import React from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.Nav_Container}>
        {/* Nav Logo */}
        <div className={styles.Nav_Logo}>
          <img src="/portfolio_logo.png" alt="portfolio_logo" />
        </div>

        {/* Nav List */}
        <div className={styles.Nav_list}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Projects
          </NavLink>

          <NavLink
            to="/skills"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Skills
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Contact Me
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;

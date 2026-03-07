import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.Nav_Container}>
        {/* Nav Logo */}
        <div className={styles.Nav_Logo}>
          <img src="/portfolio_logo.png" alt="portfolio_logo" />
        </div>

        {/* Menu */}
        <div
          className={styles.menu_icon}
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav List */}
        <div
          className={`${styles.Nav_list} ${openMenu ? styles.show_menu : ""}`}
        >
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

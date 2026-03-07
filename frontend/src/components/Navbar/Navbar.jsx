import React, { useState, useRef, useEffect } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const navRef = useRef(null);

  // outside click close
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles.Nav_Container} ref={navRef}>
      {/* Logo */}
      <div className={styles.Nav_Logo}>
        <img src="/portfolio_logo.png" alt="portfolio_logo" />
      </div>

      {/* Menu Icon */}
      <div className={styles.menu_icon} onClick={() => setOpenMenu(!openMenu)}>
        {openMenu ? <FaTimes /> : <FaBars />}
      </div>

      {/* Nav List */}
      <div className={`${styles.Nav_list} ${openMenu ? styles.show_menu : ""}`}>
        <NavLink
          to="/"
          onClick={() => setOpenMenu(false)}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          onClick={() => setOpenMenu(false)}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          onClick={() => setOpenMenu(false)}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Projects
        </NavLink>

        <NavLink
          to="/skills"
          onClick={() => setOpenMenu(false)}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Skills
        </NavLink>

        <NavLink
          to="/contact"
          onClick={() => setOpenMenu(false)}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Contact Me
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;

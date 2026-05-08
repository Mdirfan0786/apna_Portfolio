import { useRef, useState } from "react";

import styles from "./Navbar.module.css";

import { FaBars, FaTimes } from "react-icons/fa";

import useOutsideClick from "../../hooks/useOutsideClick";
import NavLinks from "./navLinks/NavLinks";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const navRef = useRef(null);

  useOutsideClick(navRef, () => {
    setOpenMenu(false);
  });

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

      <NavLinks openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </div>
  );
}

export default Navbar;

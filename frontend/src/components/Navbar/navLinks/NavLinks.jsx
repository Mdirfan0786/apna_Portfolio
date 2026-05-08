import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.css";
import { navLinks } from "../../../data/navLinksData";

const NavLinks = ({ openMenu, setOpenMenu }) => {
  return (
    <div
      className={`
        ${styles.Nav_list}
        ${openMenu ? styles.show_menu : ""}
      `}
    >
      {navLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          onClick={() => setOpenMenu(false)}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;

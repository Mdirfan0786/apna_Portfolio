import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";
import { SOCIAL_LINKS } from "../../constant/socialLinks";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>

        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>

      <p> &copy; 2026 MD IRFAN. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

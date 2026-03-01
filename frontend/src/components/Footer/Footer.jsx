import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a
          href="https://github.com/Mdirfan0786/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/md-irfan-2623b4210/"
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

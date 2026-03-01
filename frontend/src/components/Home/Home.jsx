import React from "react";
import Styles from "./Home.module.css";
import { TypeAnimation } from "react-type-animation";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";

function Home() {
  return (
    <>
      <div className={Styles.Home_Container}>
        <div className={Styles.left_Container}>
          <h1>
            Hi, I'm <span className={Styles.highlight}>MD IRFAN</span>
          </h1>
          <h2>
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1500,
                "React Developer",
                1500,
                "Node.js Developer",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <span>
            I build scalable and user-focused web applications using React and
            Node.js. Passionate about clean UI, secure backend systems, and
            performance-driven development.
          </span>

          <div className={Styles.button_Group}>
            <a
              href="/MD_Irfan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoDocumentTextOutline />
              View CV
            </a>

            <a href="/MD_Irfan_Resume.pdf" download>
              <MdOutlineFileDownload />
              Download CV
            </a>
          </div>
        </div>
        <div className={Styles.right_Container}>
          <img src="/irfan_profile.jpeg" alt="MD Irfan Profile" />
        </div>
      </div>
    </>
  );
}

export default Home;

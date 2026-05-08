import React from "react";
import Styles from "./Home.module.css";
import { TypeAnimation } from "react-type-animation";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";

function Home() {
  const resumeViewLink =
    "https://docs.google.com/document/d/1i27rAootaVPfwFn-MRsToFYMAYHlshayFLmNNkT6j0o/preview";

  const resumeDownloadLink =
    "https://docs.google.com/document/d/1i27rAootaVPfwFn-MRsToFYMAYHlshayFLmNNkT6j0o/export?format=pdf";

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
          <span className={Styles.summary}>
            I build scalable and user-focused web applications using React and
            Node.js. Passionate about clean UI, secure backend systems, and
            performance-driven development.
          </span>

          <div className={Styles.button_Group}>
            <a href={resumeViewLink} target="_blank" rel="noopener noreferrer">
              <IoDocumentTextOutline />
              View CV
            </a>

            <a href={resumeDownloadLink}>
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

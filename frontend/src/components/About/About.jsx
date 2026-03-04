import React from "react";
import Styles from "./About.module.css";

function About() {
  // focus Data
  const focusData = [
    {
      title: "Building Scalable Web Applications",
      description:
        "Developing full-stack applications using the MERN stack with clean architecture and scalable backend APIs.",
    },
    {
      title: "Responsive & Modern UI Design",
      description:
        "Creating responsive, user-friendly interfaces using React.js and modern CSS techniques.",
    },
    {
      title: "Authentication & Security",
      description:
        "Implementing secure authentication systems using JWT, protected routes, and proper API security practices.",
    },
    {
      title: "Clean & Maintainable Code",
      description:
        "Writing well-structured, reusable, and maintainable code following best development practices.",
    },
    {
      title: "Performance & User Experience",
      description:
        "Optimizing applications for better performance, faster loading, and smooth user experience.",
    },
  ];
  return (
    <>
      <div className={Styles.About_Container}>
        {/* About Section */}
        <div className={Styles.About_Section}>
          <div className={Styles.about_left_Container}>
            <div className={Styles.About_details}>
              <h1 className={Styles.about_mainHeading}>
                About <span>Me</span>
              </h1>

              <p className={Styles.about_summary}>
                I am a Full Stack Developer specializing in the MERN stack
                (MongoDB, Express, React, Node.js). I build complete end-to-end
                web applications — from designing responsive user interfaces to
                developing secure and scalable backend APIs.
              </p>

              <br />

              <p className={Styles.about_summary}>
                I have developed real-world projects including a social
                networking platform with JWT authentication, a travel listing
                application with map integration, and AI-powered web solutions.
                My focus is on writing clean, maintainable code and delivering
                performance-driven applications.
              </p>
            </div>
          </div>

          <div className={Styles.about_right_Container}>
            <img src="irfan.jpeg" alt="Md irfan about pic" />
          </div>
        </div>
      </div>

      {/* Focus Section */}
      <div className={Styles.focus_Section}>
        <div className={Styles.focus_right_Container}>
          <div className={Styles.focus_details}>
            <h1 className={Styles.focus_mainHeading}>
              What I <span>Focus On</span>
            </h1>

            <div className={Styles.focus_Grid}>
              {focusData.map((data, idx) => (
                <div key={idx} className={Styles.focus_Card}>
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* My Development Journey */}
      <div className={Styles.About_Container}>
        <div className={Styles.About_Section}>
          <div className={Styles.about_left_Container}>
            <div className={Styles.About_details}>
              <h1 className={Styles.about_mainHeading}>
                My Development <span>Journey</span>
              </h1>

              <p className={Styles.about_summary}>
                My journey into web development started with learning the
                fundamentals of JavaScript and gradually exploring modern
                frameworks like React and Node.js. Through building full-stack
                projects, I gained hands-on experience in designing REST APIs,
                implementing authentication systems, and creating dynamic user
                interfaces. I continuously work on improving my problem-solving
                skills and building practical applications.
              </p>
            </div>
          </div>

          <div className={Styles.about_right_Container}>
            <img src="about.png" alt="Md irfan about pic" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

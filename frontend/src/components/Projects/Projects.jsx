import React, { useState } from "react";
import Styles from "./Projects.module.css";
import { FaRegEye, FaGithub } from "react-icons/fa";

const ProjectData = [
  {
    title: "JobAdda",
    img: "JobAdda.png",
    description:
      "Full stack social networking platform where users create profiles, connect with others, share posts and generate resume PDFs.",
    tech_Stack:
      "React | Node.js | Express | MongoDB | JWT Authentication | PDFKit",
    Live_Demo: "https://jobadda-frontend.onrender.com",
    Github_Repo: "https://github.com/Mdirfan0786/JobAdda",
  },

  {
    title: "ApnaGPT",
    img: "ApnaGPT.png",
    description:
      "AI powered chat application where users can ask questions and receive AI generated responses in real time.",
    tech_Stack: "React | Node.js | Express | MongoDB | OpenAI API",
    Live_Demo: "https://apna-gpt-pink.vercel.app/",
    Github_Repo: "https://github.com/Mdirfan0786/apnaGPT",
  },

  {
    title: "ApnaGitHub",
    img: "ApnaGitHub.png",
    description:
      "Full-stack GitHub clone that simulates core version control workflows including repositories, commits, and version history with a GitHub-style interface.",
    tech_Stack:
      "React | Node.js | Express | MongoDB | Socket.io | AWS S3 | Yargs",
    Live_Demo: "https://github-clone-frontend-izc1.onrender.com",
    Github_Repo: "https://github.com/Mdirfan0786/github-Clone",
  },

  {
    title: "Zoom Clone",
    img: "Home.png",
    description:
      "A real-time video conferencing application that allows users to create or join meeting rooms and communicate through live video, audio, screen sharing, and chat using WebRTC. Includes meeting history tracking and secure room-based communication.",
    tech_Stack: "React | Node.js | Express | WebRTC | Socket.io | MongoDB",
    Live_Demo: "https://zoom-clone-frontend-eoao.onrender.com",
    Github_Repo: "https://github.com/Mdirfan0786/Zoom-clone",
  },

  {
    title: "WanderLust",
    img: "WanderLust.png",
    description:
      "A full-stack web application for sharing and exploring travel destination listings. Built using Node.js, Express.js, MongoDB, and EJS templating, this platform allows users to create listings, post reviews, and visualize locations on an interactive map.",
    tech_Stack:
      "EJS | Node.js | Express | Cloudinary | MapBox Api | MongoDB | Passport.js",
    Live_Demo: "https://airbnb-mdirfan.onrender.com",
    Github_Repo: "https://github.com/Mdirfan0786/delta-project",
  },

  {
    title: "Zerodha Clone",
    img: "Zerodha.png",
    description:
      "A full-stack stock trading platform inspired by Zerodha that allows users to manage their investments, view holdings, and track portfolio performance through an interactive dashboard.",
    tech_Stack: "React | Node.js | Express | MongoDB | MUI | Chart.js | JWT",
    Live_Demo: "https://zerodha-clone-frontend-b924.onrender.com",
    Github_Repo: "https://github.com/Mdirfan0786/Zerodha-Clone",
  },

  {
    title: "Artwork DataTable",
    img: "Artwork.png",
    description:
      "Advanced React DataTable with lazy loading, persistent multi-page row selection, and custom selection logic using TypeScript and PrimeReact.",
    tech_Stack: "React | TypeScript | PrimeReact | REST API",
    Live_Demo: "https://artwork-table-codecreafter.netlify.app/",
    Github_Repo: "https://github.com/Mdirfan0786/ArtWork",
  },
];

function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(3);
  return (
    <>
      <section className={Styles.projects}>
        <h1>Projects</h1>
        <p>
          Some of the applications I've built using modern web technologies.
        </p>

        <div className={Styles.projects_container}>
          {ProjectData.slice(0, visibleProjects).map((data, idx) => (
            <div key={idx} className={Styles.project_card}>
              <div className={Styles.card_img}>
                <img src={data.img} alt="JobAdda Project" />
              </div>

              <h3>{data.title}</h3>
              <p>{data.description}</p>

              <div className={Styles.tech}>{data.tech_Stack}</div>

              <div className={Styles.buttons}>
                <a href={data.Live_Demo}>
                  <FaRegEye />
                  Live
                </a>

                <a href={data.Github_Repo}>
                  {" "}
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={Styles.load_more}>
          <button
            onClick={() =>
              setVisibleProjects(
                visibleProjects >= ProjectData.length ? 3 : visibleProjects + 3,
              )
            }
          >
            {visibleProjects >= ProjectData.length ? "Show Less" : "Load More"}
          </button>
        </div>
      </section>
    </>
  );
}

export default Projects;

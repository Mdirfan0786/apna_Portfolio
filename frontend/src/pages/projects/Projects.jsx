import React, { useState } from "react";
import Styles from "./Projects.module.css";
import { FaRegEye, FaGithub } from "react-icons/fa";
import ProjectData from "../../data/projectData";

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
                <a href={data.Live_Demo} target="_blank">
                  <FaRegEye />
                  Live
                </a>

                <a href={data.Github_Repo} target="_blank">
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

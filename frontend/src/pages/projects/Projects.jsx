import { useState } from "react";

import Styles from "./Projects.module.css";

import ProjectData from "../../data/projectData";

import ProjectCard from "../../components/project/ProjectCard/ProjectCard";
import LoadMoreButton from "../../components/project/LoadMoreButton/LoadMoreButton";

function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(3);

  return (
    <section className={Styles.projects}>
      <h1>Projects</h1>

      <p>Some of the applications I've built using modern web technologies.</p>

      <div className={Styles.projects_container}>
        {ProjectData.slice(0, visibleProjects).map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>

      <LoadMoreButton
        visibleProjects={visibleProjects}
        totalProjects={ProjectData.length}
        setVisibleProjects={setVisibleProjects}
      />
    </section>
  );
}

export default Projects;

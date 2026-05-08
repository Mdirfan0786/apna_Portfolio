import { FaRegEye, FaGithub } from "react-icons/fa";

import Styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  return (
    <div className={Styles.project_card}>
      <div className={Styles.card_img}>
        <img src={project.img} alt={project.title} />
      </div>

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className={Styles.tech}>{project.tech_Stack}</div>

      <div className={Styles.buttons}>
        <a href={project.Live_Demo} target="_blank">
          <FaRegEye />
          Live
        </a>

        <a href={project.Github_Repo} target="_blank">
          <FaGithub />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

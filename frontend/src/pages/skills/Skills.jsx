import React from "react";
import Styles from "./Skills.module.css";

const Skills = () => {
  const skills = {
    Frontend: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
    Backend: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT Authentication",
    ],
    Tools: ["Git", "GitHub", "Vercel", "Render", "Postman", "VS Code"],
    Libraries: ["Tailwind CSS", "Bootstrap", "PrimeReact", "Figma"],
  };

  return (
    <section className={Styles.Skills_Section}>
      <h2 className={Styles.Skills_title}>Skills</h2>

      <p className={Styles.Skills_desc}>
        A collection of technologies and tools I use to build modern, scalable,
        and user-friendly web applications.
      </p>

      <div className={Styles.Skills_container}>
        {Object.entries(skills).map(([category, items]) => (
          <div className={Styles.Skills_card} key={category}>
            <h3>{category}</h3>
            <div className={Styles.Skills_list}>
              {items.map((skill, index) => (
                <span key={index} className={Styles.Skill_item}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

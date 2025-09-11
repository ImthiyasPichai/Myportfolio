import React from "react";
import "./Skills.css";

const skills = ["React", "Angular","TypeScript","JavaScript", "MVC", "Node.js", ".NET", "SQL","Postgres"];

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, i) => (
          <div key={i} className="skill-card">{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

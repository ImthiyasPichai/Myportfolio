import React from "react";
import "./Skills.css";
import { FaReact, FaAngular, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiDotnet, SiPostgresql } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Angular", icon: <FaAngular /> },
  //{ name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "MVC", icon: <SiDotnet /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: ".NET", icon: <SiDotnet /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Postgres", icon: <SiPostgresql /> },
];

const Skills = () => {
  return (
    <section id="skills">
      <h2>⚡ Skills</h2>
      <div className="skills-container">
        {skills.map((skill, i) => (
          <div key={i} className="skill-card" style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

import React, { useEffect, useState } from "react";
import "./Hero.css";

const roles = [
  "Full Stack Developer",
  "React Specialist",
  "Angular Enthusiast",
  ".NET & Entity Framework Expert",
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500); // change every 2.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          👋 Hi, I'm <span className="highlight">Imthiyas Pichai</span>
        </h1>
        <h2 className="role">{roles[currentRole]}</h2>
        <p className="experience">
          🚀 3+ Years of Experience building scalable web applications
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">💼 View Projects</a>
          <a href="#contact" className="btn secondary">📩 Hire Me</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="code-box">
          <pre>
{`function Developer() {
  return {
    name: "Imthiyas Pichai",
    skills: ["React", "Angular", ".NET", "Entity Framework"],
    experience: "3+ years"
  }
}`}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Hero;

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
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {/* Floating icons layer */}
      <div className="floating-icons">
        <span style={{ left: "10%", animationDelay: "0s" }}>⚛️</span>
        <span style={{ left: "40%", animationDelay: "3s" }}>🅰️</span>
        <span style={{ left: "70%", animationDelay: "6s" }}>💻</span>
        <span style={{ left: "85%", animationDelay: "9s" }}>🌐</span>
      </div>

      <div className="hero-content">
        <h1>
          👋 Welcome, I’m <span className="highlight">Imthiyas Pichai</span>
        </h1>
        <h2 className="role">{roles[currentRole]}</h2>
        <p className="experience">
          🚀 3+ Years of Experience building scalable and performance-driven web
          applications
        </p>
        <p className="intro">
          I’m passionate about turning ideas into powerful digital solutions.  
          Explore my portfolio to see projects I’ve delivered, and feel free to
          connect if you’re looking for collaboration or expertise.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            💼 Explore My Work
          </a>
          <a href="#contact" className="btn secondary">
            🤝 Let’s Connect
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="code-box">
          <pre>
{`const developer = {
  name: "Imthiyas Pichai",
  skills: ["React", "Angular", ".NET", "Entity Framework"],
  experience: "3+ years",
  passion: "Building scalable apps 🚀",
  motto: "Turning ideas into impactful solutions 💡"
};`}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Hero;

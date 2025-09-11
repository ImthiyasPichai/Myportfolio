import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h2 className="about-title">👨‍💻 About Me</h2>
      <div className="about-card">
        <p>
          I am a <span>Full Stack Software Developer</span> with <span>3+ years of professional experience</span> 
          building enterprise-grade applications that deliver real business impact.  
        </p>

        <p>
          My core expertise lies in <span>Angular</span>, <span>React</span>, <span>.NET</span>, 
          and <span>Entity Framework</span>, where I have successfully developed:  
        </p>

        <ul className="about-list">
          <li>⚡ Scalable customer portals handling thousands of users</li>
          <li>⚡ Real-time food ordering & billing systems with live notifications</li>
          <li>⚡ Secure admin dashboards for order management & reporting</li>
          <li>⚡ Token & appointment management platforms integrated with KDS</li>
        </ul>

        <p>
          I specialize in <span>end-to-end development</span> — from designing sleek, user-friendly frontends 
          to architecting powerful, efficient backends. My focus is always on writing 
          <span> clean, maintainable code</span> and delivering <span>scalable solutions</span> 
          that solve complex problems.  
        </p>

        <p>
          Outside of code, I’m passionate about <span>continuous learning</span>, 
          exploring emerging technologies, and turning bold ideas into working software 
          that <span>surprises users and exceeds expectations</span>. 🚀
        </p>
      </div>
    </section>
  );
};

export default About;

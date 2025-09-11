import React from "react";
import "./Projects.css";

const projects = [
 {
    title: "Arabian Dastar Customer Portal",
    description:
      "A food ordering platform built with Angular where customers can browse menus, place orders, and track them in real-time. Designed with a smooth, responsive, and user-friendly experience.",
    link: "https://www.arabiandastar.com",
  },
  {
    title: "Arabian Dastar Billing Admin Panel",
    description:
      "An admin dashboard built with .NET MVC for managing the Arabian Dastar platform. It allows administrators to create and update menu items, process and track customer orders, send real-time notifications, and even place orders directly on behalf of customers.",
    link: "https://billing.arabiandastar.com/",
  },
  {
    title: "Soul & Soul Billing Admin Panel",
    description:
      "An admin dashboard built with .NET MVC for managing the Arabian Dastar platform. It allows administrators to create and update menu items, process and track customer orders, send real-time notifications, and even place orders directly on behalf of customers.",
    link: "http://snsadmin.cxengine.net/",
  },
  {
    title: "TCHOO Billing Admin Panel",
    description:
      "An admin dashboard built with .NET MVC for managing the Arabian Dastar platform. It allows administrators to create and update menu items, process and track customer orders, send real-time notifications, and even place orders directly on behalf of customers.",
    link: "https://villiyantgroups.cxengine.net/",
  },
{
  title: "Mytoken Admin Panel",
  description:
    "A .NET MVC-based admin dashboard for managing a digital token system used in appointment and queue management. The platform integrates with a Kitchen Display System (KDS) to streamline order and appointment flows, and includes an announcements feature for broadcasting important updates to users in real time.",
  link: "http://raisoni.mytoken.co/",
},

  {
    title: "Chat Application",
    description: "Real-time chat app with WebSocket & Firebase.",
    link: "#",
  },
  {
    title: "Task Manager",
    description: "A productivity app with drag & drop features.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">🚀 Projects</h2>
      <div className="projects-container">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a href={p.link} target="_blank" rel="noreferrer">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

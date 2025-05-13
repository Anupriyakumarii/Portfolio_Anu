import React from "react";
import "./Projects.css";
import { projects } from "../../data/projects.js";

const Projects = () => {
  return (
    <>
      <section className="projects-section" id="Projects">
        <h2 className="section-title">🚀 Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="tech-stack">Tech: {project.tech.join(", ")}</p>
                <div className="project-links">
                  <a href={project.demo} target="_blank">
                    Live Demo
                  </a>
                  <a href={project.github} target="_blank">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;

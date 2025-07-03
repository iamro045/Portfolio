import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Weather App',
      description: 'A personal portfolio website built with React showcasing my work and skills.',
      link: 'https://iamro045.github.io/Weather-App/',
    },
    {
      title: 'EliteMart',
      description: 'An intuitive app that displays real-time weather info using OpenWeather API.',
      link: 'https://github.com/iamro045/EliteMart',
    },
    
    // {
    //   title: 'EliteMart',
    //   description: 'A responsive task manager app built with the MERN stack for productivity.',
    //   link: 'https://github.com/iamro045/EliteMart',
    // },
    {
      title: 'EngageHub',
      description: 'A personal portfolio website built with React showcasing my work and skills.',
      link: 'https://github.com/iamro045/EngageHub',
    },
    // {
    //   title: 'EngageHub',
    //   description: 'An intuitive app that displays real-time weather info using OpenWeather API.',
    //   link: 'https://github.com/iamro045/EngageHub',
    // },
    // {
    //   title: 'EngageHub',
    //   description: 'A responsive task manager app built with the MERN stack for productivity.',
    //   link: 'https://github.com/iamro045/EngageHub',
    // },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">🚀 My Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project <FaExternalLinkAlt />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

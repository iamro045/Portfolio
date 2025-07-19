import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Weather App',
      description: 'An intuitive app that displays real-time weather information using the OpenWeather API.',
      link: 'https://iamro045.github.io/Weather-App/',
    },
    {
      title: 'EliteMart E-commerce', // Changed title for clarity
      description: 'A robust e-commerce platform likely built with the MERN stack for seamless online shopping.', // Assuming it's an e-commerce site based on the name
      link: 'https://github.com/iamro045/EliteMart',
    },
    {
      title: 'EngageHub Social Platform', // Changed title for clarity
      description: 'A dynamic social engagement platform for connecting users and sharing content.', // Assuming it's a social platform based on the name
      link: 'https://github.com/iamro045/EngageHub',
    },
    // Add more projects here, ensuring each is unique and accurately described
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

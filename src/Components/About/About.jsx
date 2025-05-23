import React from 'react';
import './About.css';
import { FaCode, FaLaptopCode, FaTools } from 'react-icons/fa';

const About = () => { 
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title">👨‍💻 About Me</h2>
        <p className="tagline"><strong>Turning coffee into code, one line at a time.</strong> </p>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Hey there! I’m <strong>Rohit Shinde</strong> a passionate <strong>Computer Science</strong> student and an enthusiastic <strong>Full Stack Developer</strong>. I love crafting <em>clean, responsive</em> web applications using the <strong>MERN Stack</strong>. I also work with <strong>Python, Java, and SQL</strong> for versatile backend logic and data handling. During my <strong>Full Stack internship</strong>, I worked on real-world projects, collaborated in teams, tackled debugging challenges, and refined my problem-solving skills. I’m a lifelong learner, always curious about new technologies, tools, and trends. Whether it's backend APIs or front-end design, I’m ready to build something amazing.
            </p>
            <p className="connect-line">
              Let’s connect and create something <span className="highlight">awesome</span> together!
            </p>
          </div>

          <div className="about-icons">
            <div className="icon-card">
              <FaLaptopCode className="icon" />
              <p>Full Stack Dev</p>
            </div>
            <div className="icon-card">
              <FaCode className="icon" />
              <p>MERN | Java | Python</p>
            </div>
            <div className="icon-card">
              <FaTools className="icon" />
              <p>Debug & Deploy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

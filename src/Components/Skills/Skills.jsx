import React from 'react';
// import PropTypes from 'prop-types';
import './Skills.css';

const Skills = () => {
  const skillCategories = {
    "🖥️ Frontend": ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Angular.js', 'Bootstrap'],
    "⚙️ Backend": ['Node.js', 'Express.js', 'MongoDB', 'SQL'],
    "🧰 Tools & Platforms": ['Git & GitHub', 'Postman', 'VS Code'],
    "📊 Data & Analytics": ['Python', 'NumPy', 'Pandas', 'Data Cleaning'],
    "🎨 Design": ['Figma', 'Adobe XD', 'Canva']
  };

  return (
    <section className="skills" id="skills" aria-labelledby="skills-title">
      <h2 className="skills-title" id="skills-title"> 🧠 My Skillset</h2>
      <div className="skills-wrapper">
        {Object.entries(skillCategories).map(([category, skills], index) => (
          <div className="skill-category" key={index} aria-labelledby={`category-${index}`}>
            <h3 id={`category-${index}`}>{category}</h3>
            <div className="skills-grid">
              {skills.map((skill, idx) => (
                <div className="skill-card" key={idx} role="listitem">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Skills.propTypes = {
//   // Define prop types if you plan to pass props in the future
// };

export default Skills;

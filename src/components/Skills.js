import React from "react";
import { motion } from "framer-motion";
import "../styles.css";

const techSkills = [
  "C++", "Python", "HTML", "CSS", "JavaScript", "React.js", "Node.js",
  "Express.js", "PostgreSQL", "AWS Cloud", "Django", "Machine Learning",
];

const softSkills = [
  "Problem Solving", "Communication", "Teamwork", "Time Management",
  "Adaptability", "Creativity",
];

const tools = [
  "Git", "GitHub", "VS Code", "Kiro","Roboflow","Jupyter Notebook","Edge Impulse",
];

const skillLevels = [
  { name: "C++", level: 90 },
  { name: "Python", level: 85 },
  { name: "React.js", level: 80 },
  { name: "Django", level: 75 },
  { name: "PostgreSQL", level: 70 },
  { name: "Machine Learning", level: 65 },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">Floating through my tech space 🚀</p>

      {/* Floating Skills */}
      <div className="floating-container">
        {[...techSkills, ...softSkills].map((skill, index) => (
          <motion.div
            key={index}
            className="floating-skill"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>

      {/* Skill Progress Bars */}
      <div className="proficiency-container">
        <h3 className="sub-heading">Technical Proficiency</h3>
        {skillLevels.map((item, index) => (
          <div className="progress-wrapper" key={index}>
            <span>{item.name}</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${item.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Tools Section */}
      <div className="tools-container">
        <h3 className="sub-heading">Tools & Platforms</h3>
        <div className="tools-grid">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              className="tool-item"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Quote */}
      <div className="skills-footer">
        <p>“Learning never exhausts the mind. It only enhances it.”</p>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";

const Projects = () => {
  return (
    <div className="projects-section">
      <h2 className="section-title">📁 Projects</h2>
      <p className="section-subtitle">Some of the exciting projects I’ve worked on:</p>

      <div className="project-list">

        <div className="project-card">
          <h3>📘 Student Record Management System</h3>
          <p>
            A C++ based console application designed to manage student information efficiently. It allows functionalities like adding, updating, deleting, and viewing student records. Ideal for basic CRUD operations and file handling practice.
          </p>
        </div>

        <div className="project-card">
          <h3>🩸 Thalassemia Support Platform</h3>
          <p>
            A full-stack web application built to support thalassemia patients by matching blood group donors with requesters. It automatically sends notifications to matching donors. <br />
            <strong>Frontend:</strong> HTML, CSS, JavaScript, Bootstrap<br />
            <strong>Backend:</strong> Django<br />
            <strong>Database:</strong> PostgreSQL
          </p>
          <a 
            href="https://github.com/SHEENA2024/Thalassemia-Support" 
            className="project-link"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View on GitHub →
          </a>
        </div>

        <div className="project-card">
          <h3>❤️ Cardiovascular Disease Detector</h3>
          <p>
            A machine learning-based predictive model that uses logistic regression to assess a person's risk of cardiovascular disease. It performs binary classification on medical datasets to aid early diagnosis.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Projects;


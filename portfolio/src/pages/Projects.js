// src/pages/Projects.js
import React from 'react';

function Projects() {
  const projects = [
    {
      title: "cutepixo",
      description: "A brief description of project 1",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Project 2",
      description: "A brief description of project 2",
      technologies: ["TypeScript", "Express", "PostgreSQL"],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-6">
        My Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span 
                  key={i}
                  className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-2 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
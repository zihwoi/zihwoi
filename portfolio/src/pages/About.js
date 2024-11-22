// src/pages/About.js
import React from 'react';

function About() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-6">
        About Me
      </h2>
      <div className="text-gray-700 dark:text-gray-300">
        <p className="mb-4">
          I'm a passionate software developer with expertise in modern web technologies.
        </p>
        <p className="mb-4">
          My skills include:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>React.js</li>
          <li>JavaScript/TypeScript</li>
          <li>Node.js</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
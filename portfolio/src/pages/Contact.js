// src/pages/Contact.js
import React from 'react';

function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-6">
        Contact Me
      </h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Feel free to reach out to me through any of these channels:
        </p>
        <div className="space-y-2">
          <p className="text-gray-700 dark:text-gray-300">
            Email: your.email@example.com
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            LinkedIn: linkedin.com/in/yourprofile
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            GitHub: github.com/yourusername
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
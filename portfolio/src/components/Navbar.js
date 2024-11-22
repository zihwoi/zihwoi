// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-teal-600 dark:text-teal-400">
              Zenn
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-teal-600">Home</Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-teal-600">About</Link>
            <Link to="/projects" className="text-gray-700 dark:text-gray-300 hover:text-teal-600">Projects</Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-teal-600">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
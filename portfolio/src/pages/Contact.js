// src/pages/Contact.js
import React from 'react';

function Contact() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-6">
                find me on:
            </h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                    my links:
                </p>
                <div className="space-y-2">
                    <p className="text-gray-700 dark:text-gray-300">
                        <a
                            href="https://x.com/zihwoi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-500 hover:underline"
                        >
                            x (twitter)
                        </a>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        <a
                            href="https://www.zihwoi.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-500 hover:underline"
                        >
                            zi.hwoi
                        </a>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        <a
                            href="https://github.com/zihwoi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-500 hover:underline"
                        >
                            github
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm">
         ClassFinder - Code assistance by ChatGPT.
        </p>
        <div className="mt-4">
          <a
            href="https://github.com/jnoyon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 hover:text-teal-500 mx-2"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/jihadur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 hover:text-teal-500 mx-2"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-xs mt-4">Made with ❤️ Jihadur Rahman Noyon</p>
      </div>
    </footer>
  );
}

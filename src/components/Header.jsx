import React from 'react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-teal-500 p-6 shadow-lg w-full mb-5">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-white text-4xl font-bold tracking-tight">ClassFinder</h1>
        <p className="text-white text-lg mt-2">Find Tailwind, Bootstrap, and CSS Classnames Quickly</p>
      </div>
    </header>
  );
}

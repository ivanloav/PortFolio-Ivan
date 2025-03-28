import React, { useState } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Mi Portfolio</h1>
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><a href="#about" className="hover:text-gray-300 transition">Sobre mí</a></li>
          <li><a href="#skills" className="hover:text-gray-300 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-gray-300 transition">Proyectos</a></li>
          <li><a href="#contacto" className="hover:text-gray-300 transition">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

import React from "react";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm mb-2">&copy; {new Date().getFullYear()} Mi Portfolio. Todos los derechos reservados.</p>
        <div className="flex justify-center gap-4 text-sm">
          <a href="https://github.com/tu-usuario" target="_blank" className="hover:underline text-gray-300">GitHub</a>
          <a href="#contacto" className="hover:underline text-gray-300">Contacto</a>
        </div>
      </div>
    </footer>

  );
}

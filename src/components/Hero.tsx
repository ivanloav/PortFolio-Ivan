import React from "react";
export default function Hero() {
  return (
    <section className="bg-gray-100 py-20 text-center" data-aos="fade-up">
      <h1 className="text-4xl font-bold mb-4">Soy Desarrollador Full Stack</h1>
      <p className="text-lg text-gray-700 mb-6">Me apasiona crear aplicaciones web modernas y escalables</p>
      <div className="flex justify-center gap-4">
        <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">Proyectos</a>
        <a href="#contacto" className="bg-white text-blue-600 px-6 py-3 rounded border hover:bg-blue-50 transition">Contacto</a>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import Input from "./Input";
import Alert from "./Alert";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send(
      "TU_SERVICE_ID",
      "TU_TEMPLATE_ID",
      form,
      "TU_PUBLIC_KEY"
    ).then(
      () => {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        setError("");
      },
      () => {
        setError("Ocurrió un error. Intenta de nuevo más tarde.");
      }
    );
  };

  return (
    <section id="contacto" className="py-10 px-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contáctame</h2>
      {submitted && <Alert type="success">Gracias por tu mensaje. Te responderé pronto.</Alert>}
      {error && <Alert type="error">{error}</Alert>}
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <Input label="Nombre" name="name" value={form.name} onChange={handleChange} placeholder="Tu nombre" />
        <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="tu@email.com" />
        <div>
          <label className="block text-sm font-medium mb-1">Mensaje</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Escribe tu mensaje aquí"
            rows={4}
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}

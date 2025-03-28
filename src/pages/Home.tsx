import React from "react";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Card from "../components/Card";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div data-aos="fade-right">
        <Hero />
      </div>
      <div data-aos="fade-left">
        <AboutMe />
      </div>
      <div data-aos="fade-right" data-aos-duration="1000">
        <Skills />
      </div>
      <section
        id="projects"
        className="py-10 px-6 grid gap-6 md:grid-cols-2 max-w-6xl mx-auto"
      >
        <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500">
          <Card
            title="GesPack - Gestión de pedidos"
            image="https://via.placeholder.com/400x200"
            link="https://github.com/tu-usuario/gespack"
          >
            <p>
              Aplicación para gestionar pedidos, stock y clientes. Hecha con React y PostgreSQL.
            </p>
          </Card>
        </div>
        <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500">
          <Card
            title="API REST con Swagger"
            image="https://via.placeholder.com/400x200"
            link="https://github.com/tu-usuario/api-swagger"
          >
            <p>
              Backend con Express + Swagger. Documentación automática y deploy con Docker.
            </p>
          </Card>
        </div>
      </section>
      <div data-aos="fade-right">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

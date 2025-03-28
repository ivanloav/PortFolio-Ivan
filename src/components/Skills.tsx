import React from "react";

const skills = [
  { name: "HTML", icon: "https://cdn.simpleicons.org/html5" },
  { name: "CSS", icon: "https://cdn.simpleicons.org/css3" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
  { name: "React", icon: "https://cdn.simpleicons.org/react" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
  { name: "Express", icon: "https://cdn.simpleicons.org/express" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
  { name: "Swagger", icon: "https://cdn.simpleicons.org/swagger" },
  { name: "TypeORM", icon: "https://cdn.simpleicons.org/typeorm" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
  { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes" },
  { name: "AWS", icon: "https://cdn.simpleicons.org/amazonwebservices" },
  { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions" },
  { name: "CI/CD", icon: "https://cdn.simpleicons.org/github" },
  { name: "Testing", icon: "https://cdn.simpleicons.org/jest" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-6 bg-gray-50" data-aos="fade-right">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Tecnologías y Herramientas</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="w-24 bg-white shadow-md rounded-lg p-4 flex flex-col items-center transition-transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              data-aos-duration="800"
            >
              <img src={skill.icon} alt={skill.name} className="w-10 h-10 mb-2" />
              <span className="text-sm font-medium text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

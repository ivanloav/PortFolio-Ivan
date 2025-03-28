import React from "react";
type CardProps = {
  title: string;
  children: React.ReactNode;
  image?: string;
  link?: string;
};
export default function Card({ title, children, image, link }: CardProps) {
  return (
    <div className="bg-white rounded shadow p-4 max-w-md mx-auto" data-aos="fade-up">
      {image && <img src={image} alt={title} className="mb-4 rounded" />}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="mb-2">{children}</div>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
          Ver en GitHub
        </a>
      )}
    </div>
  );
}

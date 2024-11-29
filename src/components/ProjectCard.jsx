//import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, description, image, route }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-neutral-600 my-2">{description}</p>
        <Link
          to={route}
          className="text-blue-500 hover:underline font-semibold"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

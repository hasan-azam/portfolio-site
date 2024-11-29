import React from "react";
import { PROJECTS } from "../constants/projects";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <div className="py-12">
      <h1 className="text-center text-4xl my-8">
        My <span className="text-neutral-500">Projects</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            route={project.route}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;

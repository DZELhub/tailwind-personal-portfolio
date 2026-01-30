import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="bg-(--color-bg-main) min-h-[calc(100vh-120px)] px-6 md:px-10 py-10">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-(family-name:--font-anton) tracking-wide text-(--color-accent) text-center mb-12">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;

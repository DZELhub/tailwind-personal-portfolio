"use strict";
import img from "../assets/projects/Logo1.png";

const ProjectCard = () => {
  return (
    <div className="bg-(--color-bg-secondary) rounded-2xl p-4 flex flex-col gap-4">
      <div className=" overflow-hidden rounded-xl aspect-video">
        <img
          src={img}
          alt="Project Preview"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-sm text-(--color-text) leading-relaxed font-(family-name:--font-unica) text-justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, ut.
      </p>
      <div className="flex items-center gap-4 mt-auto">
        <a
          href="#"
          target="_blank"
          className="text-sm font-semibold text-(--color-accent) font-(family-name:--font-unica) hover:underline"
        >
          Github Repo
        </a>
        <a
          href="#"
          target="_blank"
          className="text-sm font-semibold bg-(--color-accent) text-(--color-text) px-3 py-1 rounded-full transition hover:scale-105 active:scale-95"
        >
          Visit Website
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

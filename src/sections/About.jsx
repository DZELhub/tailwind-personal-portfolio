import React from "react";

const About = () => {
  return (
    <div className="bg-(--color-bg-component) min-h-[calc(100vh-120px)] flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 px-10">
      <div className="text-center md:text-justify">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-(family-name:--font-anton) tracking-wide text-(--color-accent) mb-5">
          About Me
        </h2>
        <p className="text-base md:text-lg lg:text-xl max-w-xl font-(family-name:--font-unica) text-(--color-text) mb-5 mx-auto md:mx-0">
          I’m a frontend developer focused on building clean, responsive, and
          user-centered interfaces. I enjoy turning complex ideas into simple,
          intuitive digital experiences.
        </p>
        <p className="text-base md:text-lg lg:text-xl max-w-xl font-(family-name:--font-unica) text-(--color-text) mb-5 mx-auto md:mx-0">
          I mainly work with modern frontend technologies and care deeply about
          component structure, reusability, and accessibility.
        </p>
        <p className="text-base md:text-lg lg:text-xl max-w-xl font-(family-name:--font-unica) text-(--color-text) mb-5 mx-auto md:mx-0">
          I’m currently improving my React skills by building real-world
          projects and continuously refining my UI/UX thinking.
        </p>
      </div>
      <div className="text-center ">
        <h2 className="text-xl md:text-1xl lg:text-3xl font-(family-name:--font-anton) tracking-wide text-(--color-accent) mb-5">
          Skills
        </h2>
        <div className="text-2xl md:text-3xl lg:text-4xl font-(family-name:--font-unica) text-(--color-text) md:flex-row items-center justify-center md:justify-between gap-10 px-10">
          <i class="fa-brands fa-html5"></i>
          <i class="fa-brands fa-css3-alt"></i>
          <i class="fa-brands fa-square-js"></i>
          <i class="fa-brands fa-react"></i>
          <i class="fa-brands fa-node-js"></i>
        </div>
      </div>
    </div>
  );
};

export default About;

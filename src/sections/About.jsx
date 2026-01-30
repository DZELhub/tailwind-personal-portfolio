import React from "react";

const About = () => {
  return (
    <div className="bg-(--color-bg-component) min-h-[calc(100vh-120px)] flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 px-10">
      <div className="text-center md:text-justify">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-(family-name:--font-anton) tracking-wide text-(--color-accent) mb-5">
          About Me
        </h2>
        <p className="text-base md:text-lg lg:text-xl max-w-xl font-(family-name:--font-unica) text-(--color-text) mb-5 mx-auto md:mx-0">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
          reprehenderit facilis dolorum dolor, totam ad repellendus rem enim
          possimus laboriosam?
        </p>
        <p className="text-base md:text-lg lg:text-xl max-w-xl font-(family-name:--font-unica) text-(--color-text) mb-5 mx-auto md:mx-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          corporis quas fugiat magnam? Ea aspernatur ratione perspiciatis
          sapiente dolorem quidem.
        </p>
        <p className="text-base md:text-lg lg:text-xl max-w-xl font-(family-name:--font-unica) text-(--color-text) mb-5 mx-auto md:mx-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste
          doloribus laboriosam eum facilis ipsa.
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

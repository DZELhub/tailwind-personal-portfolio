"use strict";
import image from "../assets/logo.png";

const Hero = () => {
  return (
    <div className="bg-(--color-bg-main) min-h-[calc(100vh-120px)] flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-10 px-10">
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-(family-name:--font-anton) tracking-wide text-(--color-text) mb-5  ">
          Lorem, ipsum dolor.
        </h1>
        <p className="text-base md:text-lg lg:text-xl max-w-xl font-(family-name:--font-unica) text-(--color-text) mb-5 mx-auto md:mx-0">
          Lorem ipsum dolor sit amet.
        </p>
        <button className="py-2 px-6 text-sm md:text-base rounded-3xl bg-(--color-accent) text-(--color-text) font-(family-name:--font-unica) font-bold cursor-pointer transition duration-150 active:scale-95 active:translate-y-1">
          Lorem, ipsum.
        </button>
      </div>
      <div className="h-auto w-40 md:w-56 lg:w-72 aspect-square rounded-full border-2 border-(--color-accent) overflow-hidden flex items-center justify-center shadow-[0_0_50px_var(--color-bg-secondary)]">
        <img
          src={image}
          alt="Profile Pic"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;

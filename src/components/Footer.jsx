import React from "react";

const Footer = () => {
  return (
    <div className="h-16 px-6 w-full flex justify-evenly bg-(--color-bg-component) fixed bottom-0 inset-x-0 z-50 shadow-[0_-10px_10px_var(--color-accent)]">
      <div className="flex items-center gap-3">
        <p className="text-white font-(family-name:--font-unica)">
          <span className="font-(family-name:--font-anton) text-1xl tracking-widest text-white">
            D.Z.E.L
          </span>{" "}
          | 2026 All Rights Reserved
        </p>
      </div>
      <div className="flex items-center gap-3 md:text-xl text-white ">
        <i class="fa-brands fa-linkedin transition-colors hover:text-(--color-accent) cursor-pointer"></i>
        <i class="fa-brands fa-square-github transition-colors hover:text-(--color-accent) cursor-pointer"></i>
        <i class="fa-brands fa-square-youtube transition-colors hover:text-(--color-accent) cursor-pointer"></i>
      </div>
    </div>
  );
};

export default Footer;

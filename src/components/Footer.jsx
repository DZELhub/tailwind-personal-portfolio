import React from "react";

const Footer = () => {
  return (
    <div className="h-[10%] w-full flex flex-col bg-(--color-bg-component) fixed bottom-0 inset-x-0 z-50 shrink-0 shadow-[0_-10px_10px_var(--color-accent)] items-center gap-1 justify-center">
      <div>
        <p className="text-white">
          <span className="font-(family-name:--font-anton) text-1xl tracking-widest text-white">
            D.Z.E.L
          </span>{" "}
          | 2026 All Rights Reserved
        </p>
      </div>
      <div>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-square-github"></i>
        <i class="fa-brands fa-square-youtube"></i>
      </div>
    </div>
  );
};

export default Footer;

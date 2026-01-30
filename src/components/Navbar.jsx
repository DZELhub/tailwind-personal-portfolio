"use strict";

import logo from "../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="h-16 px-6 w-full flex justify-between bg-(--color-bg-component) fixed top-0 inset-x-0 z-50 shadow-[0_10px_10px_var(--color-accent)]">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="D.Z.E.L. Logo"
          className="h-8 w-8 md:h-10 md:w-10 rounded-full"
        />
        <h1 className="font-(family-name:--font-anton) text-xl md:text-3xl tracking-widest text-white">
          LOGO
        </h1>
      </div>
      <nav className="hidden md:flex items-center gap-10 text-white font-bold cursor-pointer font-(family-name:--font-unica)">
        <a href="" className="transition-colors hover:text-(--color-accent)">
          HOME
        </a>
        <a href="" className="transition-colors hover:text-(--color-accent)">
          ABOUT
        </a>
        <a href="" className="transition-colors hover:text-(--color-accent)">
          PROJECTS
        </a>
      </nav>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="cursor-pointer md:hidden text-white text-2xl"
      >
        <i class="fa-solid fa-person-military-pointing"></i>
      </button>
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-(--color-bg-component) flex flex-col items-center gap-6 py-6 text-white font-bold md:hidden font-(family-name:--font-unica)">
          <a href="" className="transition-colors hover:text-(--color-accent)">
            HOME
          </a>
          <a href="" className="transition-colors hover:text-(--color-accent)">
            ABOUT
          </a>
          <a href="" className="transition-colors hover:text-(--color-accent)">
            PROJECTS
          </a>
          <a href="" className="transition-colors hover:text-(--color-accent)">
            CONTACT
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;

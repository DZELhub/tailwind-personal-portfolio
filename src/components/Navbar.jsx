import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="h-[10%] w-full flex flex-row place-content-between bg-(--color-bg-component) fixed top-0 inset-x-0 z-50 shrink-0 shadow-[0_10px_10px_var(--color-accent)]">
      <div className="flex flex-row min-w-[35%] place-content-center gap-3 items-center flex-wrap">
        <img
          src={logo}
          alt="D.Z.E.L. Logo"
          className="h-10 w-10 rounded-full"
        />
        <h1 className="font-(family-name:--font-anton) text-3xl tracking-widest text-white">
          D.Z.E.L.
        </h1>
      </div>
      <div className="w-[60%] flex flex-row place-content-evenly items-center flex-wrap text-white font-bold cursor-pointer">
        <a href="" className=" hover:text-(--color-accent)">
          HOME
        </a>
        <a href="" className=" hover:text-(--color-accent)">
          ABOUT
        </a>
        <a href="" className=" hover:text-(--color-accent)">
          PROJECTS
        </a>
        <a href="" className=" hover:text-(--color-accent)">
          CONTACT
        </a>
      </div>
    </div>
  );
};

export default Navbar;

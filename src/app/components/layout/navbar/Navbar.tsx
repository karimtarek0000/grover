import Logo from "../../shared/logo/Logo";
import Links from "./Links";
import Search from "./Search";

const Navbar = (): JSX.Element => {
  return (
    <nav className="flex flex-wrap items-center justify-between px-1 py-7">
      <div className="basis-[15%]">
        <Logo />
      </div>
      <Links />
      <Search />
    </nav>
  );
};

export default Navbar;

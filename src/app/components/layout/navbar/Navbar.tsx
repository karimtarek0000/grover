import Logo from "../../shared/logo/Logo";
import Links from "./Links";
import Search from "./Search";

const Navbar = (): JSX.Element => {
  return (
    <nav className="flex flex-wrap items-center justify-between px-1 py-7">
      <Logo />

      <Links />

      <Search />
    </nav>
  );
};

export default Navbar;

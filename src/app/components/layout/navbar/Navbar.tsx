import Logo from "../../shared/logo/Logo";
import Links from "./Links";
import Search from "./Search";

const Navbar = (): JSX.Element => {
  return (
    <nav className="flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-0 px-1 py-7">
      <div className="md:basis-[15%]">
        <Logo />
      </div>
      <Links />
      <Search />
    </nav>
  );
};

export default Navbar;

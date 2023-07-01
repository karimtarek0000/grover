import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo/logo.svg";
import RenderSVG from "../../shared/RenderSVG";

const Navbar = (): JSX.Element => {
  return (
    <nav className="flex flex-wrap items-center justify-between px-1 py-3">
      <Link href="/">
        <Image src={logo} alt="logo" width="150" />
      </Link>

      <div className="flex gap-10 font-medium capitalize text-forth text-16">
        <Link href="/">home</Link>
        <Link href="/">menu</Link>
        <Link href="/">service</Link>
        <Link href="/">shop</Link>
      </div>

      <div className="flex">
        <input type="text" placeholder="search" />
        <RenderSVG name="cart" size="1.5rem" />
      </div>
    </nav>
  );
};

export default Navbar;

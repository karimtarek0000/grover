import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo/logo.svg";

const Logo = (): JSX.Element => {
  return (
    <Link href="/">
      <Image src={logo} alt="logo" width="130" />
    </Link>
  );
};

export default Logo;

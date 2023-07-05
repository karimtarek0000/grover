import Link from "next/link";
import Logo from "../../shared/logo/Logo";
import FooterLinks from "./FooterLinks";
import Style from "./style.module.css";

const company = [
  {
    title: "about us",
    link: "/",
  },
  {
    title: "blog",
    link: "/",
  },
  {
    title: "all products",
    link: "/",
  },
  {
    title: "locations map",
    link: "/",
  },
];
const services = [
  {
    title: "order tracking",
    link: "/",
  },
  {
    title: "wish List",
    link: "/",
  },
  {
    title: "my account",
    link: "/",
  },
  {
    title: "terms & conditions",
    link: "/",
  },
];
const year = new Date().getFullYear();

const {
  footerWrapperOne,
  footerWrapperTwo,
  wrapperOneCol1,
  wrapperOneCol1Desc,
  wrapperOneCol4Desc,
} = Style;

const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className="px-2 pb-0 container-inner">
        <div className={footerWrapperOne}>
          <div className={wrapperOneCol1}>
            <div className="flex justify-center lg:justify-start">
              <Logo />
            </div>
            <p className={wrapperOneCol1Desc}>
              Fast delivery, which is active all over the world, serves with
              many transportation vehicles.
            </p>
          </div>
          <FooterLinks items={company} head="company" />
          <FooterLinks items={services} head="Services" />
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-medium text-18">Get in Touch</h4>
            <p className={wrapperOneCol4Desc}>
              Subscribe to our weekly Newsletter and receive updates via email.
            </p>
          </div>
        </div>

        <div className={footerWrapperTwo}>
          <p>All Rights Reserved &copy; Karim tarek {year}</p>
          <div className="flex items-center gap-5 capitalize">
            <Link href="/">terms & conditions</Link>
            <Link href="/">privacy & policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

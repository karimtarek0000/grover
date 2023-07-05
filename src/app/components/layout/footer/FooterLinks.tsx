import Link from "next/link";
import Style from "./style.module.css";

const { wrapperFooterLinks, footerLink } = Style;

type FooterLinksProps = {
  head: string;
  items: any[];
};

const FooterLinks = ({ items, head }: FooterLinksProps): JSX.Element => {
  const renderLinks = items.map((item) => {
    return (
      <Link key={item.title} href="/" className=" whitespace-nowrap">
        {item.title}
      </Link>
    );
  });

  return (
    <div className={wrapperFooterLinks}>
      <h4 className="font-medium text-18">{head}</h4>
      <div className={footerLink}>{renderLinks}</div>
    </div>
  );
};

export default FooterLinks;

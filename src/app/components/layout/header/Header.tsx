import Image from "next/image";
import img1 from "@/assets/images/section-1/1.svg";
import Style from "./style.module.css";

const Header = (): JSX.Element => {
  const { header, note } = Style;

  return (
    <header className={header}>
      <div className="break-after-column flex-[50%]">
        <div className={note}>
          More than Faster
          <div className="w-[3.9375rem] h-[3.125rem]">
            <Image src={img1} alt="img" className=" h-[4.25rem]" />
          </div>
        </div>
        <h1 className="my-5 font-bold text-74 text-fifth">
          Groceries delivered in as little as{" "}
          <span className="font-medium text-primary">2 hours</span>
        </h1>
        <p className="text-primary text-18">
          Grocen atssures fresh grocery every morning to your family without
          getting out in this pandemic.
        </p>
      </div>
      <div className="flex-[50%]"></div>
    </header>
  );
};

export default Header;

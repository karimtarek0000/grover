import Image from "next/image";
import img1 from "@/assets/images/section-1/1.png";
import headerImg1 from "@/assets/images/section-1/header/1.png";
import headerImg2 from "@/assets/images/section-1/header/2.png";
import headerImg3 from "@/assets/images/section-1/header/3.png";
import headerImg4 from "@/assets/images/section-1/header/4.png";
import Style from "./style.module.css";
import StyleButton from "../../shared/buttons/style.module.css";
import RenderSVG from "../../shared/SVG/RenderSVG";
import Button from "../../shared/buttons/Buttons";

const Header = (): JSX.Element => {
  const { header, note } = Style;

  return (
    <header className={header}>
      <div className="md:basis-1/2">
        <div className={note}>
          More than Faster
          <div className="w-[3.9375rem] h-[3.125rem] pt-1">
            <Image src={img1} alt="img" width="100" />
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

        <div className="flex flex-col mt-16 md:items-center md:flex-row">
          <Button type="primary">order now</Button>
          <Button>
            <span className={StyleButton.iconProcess}>
              <RenderSVG name="play" size="0.8rem" />
            </span>
            Order Process
          </Button>
        </div>
      </div>

      <div className="relative flex items-end justify-center md:basis-1/2">
        <Image
          src={headerImg1}
          alt="header-one"
          width="182"
          height="272"
          className="absolute start-0 top-[25%] z-10"
        />
        <div className="w-[21.875rem] h-fit overflow-y-hidden flex-none">
          <Image src={headerImg2} alt="header-two" className="-mt-12" />
        </div>
        <Image
          src={headerImg3}
          alt="header-three"
          width="280"
          height="74"
          className="absolute top-[20%] end-0"
        />
        <Image
          src={headerImg4}
          alt="header-foure"
          width="120"
          height="156"
          className="absolute top-[40%] end-14 -z-[1]"
        />
      </div>
    </header>
  );
};

export default Header;

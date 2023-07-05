import Button from "../shared/buttons/Buttons";
import Style from "./style.module.css";
import Image from "next/image";
import img1 from "@/assets/images/section-5/1.png";
import RenderSVG from "../shared/SVG/RenderSVG";

const {
  head1,
  head2,
  description,
  section4Wrapper,
  sectionFourButtonsWrapper,
} = Style;

const SectionFour = (): JSX.Element => {
  return (
    <section className="bg-secondary">
      <div className="container-inner">
        <div className={section4Wrapper}>
          <div className="flex justify-center">
            <Image
              src={img1}
              alt="img-2"
              sizes="(min-width: 768px) 289px, 144.5px"
              width="289"
            />
          </div>

          <div className="px-2 text-center lg:text-start lg:px-0">
            <h3 className={`${head1} text-primary`}>Download our app</h3>
            <h3 className={head2}>Get the Groceries app order more easily.</h3>
            <p className={`${description} text-18 mb-16 mt-7`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.
            </p>

            <div className={sectionFourButtonsWrapper}>
              <Button
                className="sm:max-w-[13rem] lg:mx-0 lg:w-fit"
                type="third"
              >
                <RenderSVG
                  name="apple"
                  className="scale-[1.7] shrink-0"
                  size="1.4rem"
                />
                App Store
              </Button>
              <Button
                className="sm:max-w-[13rem] lg:mx-0 lg:w-fit"
                type="third"
              >
                <RenderSVG
                  name="google-store"
                  className="scale-[1.6] shrink-0"
                  size="1.5rem"
                />
                Play Store
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;

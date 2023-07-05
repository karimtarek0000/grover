import Button from "../shared/buttons/Buttons";
import Style from "./style.module.css";
import Image from "next/image";
import img1 from "@/assets/images/section-3/1.png";
import img2 from "@/assets/images/section-3/2.png";

const {
  head1,
  head2,
  description,
  section2Wrapper,
  sectionTwoCol1,
  wrapperImages,
  sectionTwoimage1,
  sectionTwoimage2,
  sectionTwoElSVG,
} = Style;

const SectionTwo = (): JSX.Element => {
  return (
    <section className="container-inner pt-[6.25rem] lg:pt-[12.5rem] lg:pb-[6.25rem]">
      <div className={section2Wrapper}>
        <div className={sectionTwoCol1}>
          <div className={wrapperImages}>
            <Image
              src={img2}
              alt="img-2"
              sizes="(min-width: 768px) 388px, 194px"
              className={sectionTwoimage2}
            />
            <Image
              src={img1}
              alt="img-1"
              sizes="(min-width: 768px) 204px, 102px"
              className={sectionTwoimage1}
            />

            <svg
              className={sectionTwoElSVG}
              width="435"
              height="303"
              viewBox="0 0 435 303"
              fill="none"
            >
              <path
                d="M417.674 23.5C423.736 43.0931 427 63.9154 427 85.5C427 201.204 333.204 295 217.5 295C101.796 295 8 201.204 8 85.5C8 58.5029 13.1065 32.6985 22.4064 9"
                stroke="#F9BA45"
                stroke-width="16"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>

        <div className="px-2 text-center lg:text-start lg:px-0">
          <h3 className={`${head1} text-seventh`}>WHY CHOOSE US</h3>
          <h3 className={head2}>Find Favorites and Discover New Ones</h3>
          <p className={`${description} text-18 mb-11 mt-7`}>
            At vero eos et accusamus et iusto odio dignissimos ducimus
            blanditiis praesen voluptatum deleniti.
          </p>
          <Button className="w-2/4 mx-auto lg:mx-0 lg:w-fit" type="primary">
            Explore Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;

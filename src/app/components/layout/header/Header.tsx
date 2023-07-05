"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  rotation,
  slideHorizontal,
  slideVertical,
  staggerContainer,
} from "@/utils/framerMotion";
import img1 from "@/assets/images/section-1/1.png";
import headerImg1 from "@/assets/images/section-1/header/1.png";
import headerImg2 from "@/assets/images/section-1/header/2.png";
import headerImg3 from "@/assets/images/section-1/header/3.png";
import headerImg4 from "@/assets/images/section-1/header/4.png";
// CSS AND SVG
import Style from "./style.module.css";
import StyleButton from "../../shared/buttons/style.module.css";
import RenderSVG from "../../shared/SVG/RenderSVG";
import Button from "../../shared/buttons/Buttons";

const {
  header,
  headerCol1,
  headerCol2,
  headerWrapperImages,
  note,
  wrapperButtons,
} = Style;

const Header = (): JSX.Element => {
  return (
    <header className={header}>
      <motion.div
        initial="hide"
        whileInView="active"
        variants={staggerContainer(0.3)}
        className={headerCol1}
      >
        <motion.div variants={slideHorizontal("40px")} className={note}>
          More than Faster
          <div className="w-[3.9375rem] h-[3.125rem] pt-1">
            <Image src={img1} alt="img" width="100" />
          </div>
        </motion.div>

        <motion.h1
          variants={slideHorizontal("60px")}
          className="my-5 font-bold text-74 text-fifth"
        >
          Groceries delivered in as little as{" "}
          <span className="font-medium text-primary">2 hours</span>
        </motion.h1>

        <motion.p
          variants={slideHorizontal("80px")}
          className="text-primary text-18"
        >
          Grocen atssures fresh grocery every morning to your family without
          getting out in this pandemic.
        </motion.p>

        <motion.div
          variants={slideVertical("3.125rem", 0.5)}
          className={wrapperButtons}
        >
          <Button type="primary">order now</Button>
          <Button>
            <span className={StyleButton.iconProcess}>
              <RenderSVG name="play" size="0.8rem" />
            </span>
            Order Process
          </Button>
        </motion.div>
      </motion.div>

      <div className={headerCol2}>
        <div className={headerWrapperImages}>
          <motion.div
            initial="hide"
            whileInView="active"
            variants={slideVertical("-4.375rem")}
            className="absolute top-4 sm:top-[7.375rem] -z-[1] sm:z-10 sm:-start-[9.0625rem]"
          >
            <Image
              src={headerImg1}
              alt="header-one"
              sizes="(min-width: 640px) 182px, 91px"
              width="182"
              height="272"
            />
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="active"
            variants={slideVertical("4.375rem")}
          >
            <Image
              src={headerImg2}
              sizes="(min-width: 640px) 417px, 208.5px"
              width="417"
              height="205"
              alt="header-two"
            />
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="active"
            variants={slideVertical("-4.375rem")}
            className="absolute top-0 -end-16 sm:top-8 sm:-end-[9.625rem]"
          >
            <Image
              src={headerImg3}
              alt="header-three"
              sizes="(min-width: 640px) 280px, 140px"
              width="280"
              height="74"
            />
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="active"
            variants={rotation(80)}
            className="absolute end-0 top-36 sm:top-48 sm:-end-[4.375rem] -z-[1] sm:-z-[1]"
          >
            <Image
              src={headerImg4}
              alt="header-foure"
              sizes="(min-width: 640px) 120px, 60px"
              width="120"
              height="156"
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;

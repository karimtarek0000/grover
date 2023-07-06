"use client";

import Button from "../shared/buttons/Buttons";
import Style from "./style.module.css";
import Image from "next/image";
import img1 from "@/assets/images/section-5/1.png";
import RenderSVG from "../shared/SVG/RenderSVG";
import { motion } from "framer-motion";
import {
  slideHorizontal,
  slideVertical,
  staggerContainer,
} from "@/utils/framerMotion";

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
          <motion.div
            initial="hide"
            whileInView="active"
            variants={slideHorizontal("-100%", 2)}
            className="flex justify-center"
          >
            <Image
              src={img1}
              alt="img-2"
              sizes="(min-width: 768px) 289px, 144.5px"
              width="289"
            />
          </motion.div>

          <motion.div
            initial="hide"
            whileInView="active"
            variants={staggerContainer(0.4, 0.5)}
            className="px-2 text-center lg:text-start lg:px-0"
          >
            <motion.h3
              variants={slideVertical("1.5625rem")}
              className={`${head1} text-primary`}
            >
              Download our app
            </motion.h3>
            <motion.h3 variants={slideVertical("1.5625rem")} className={head2}>
              Get the Groceries app order more easily.
            </motion.h3>
            <motion.p
              variants={slideVertical("1.5625rem")}
              className={`${description} text-18 mb-16 mt-7`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.
            </motion.p>

            <motion.div
              variants={slideVertical("1.5625rem")}
              className={sectionFourButtonsWrapper}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;

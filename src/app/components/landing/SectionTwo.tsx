"use client";

import Button from "../shared/buttons/Buttons";
import Style from "./style.module.css";
import Image from "next/image";
import img1 from "@/assets/images/section-3/1.png";
import img2 from "@/assets/images/section-3/2.png";
import { motion } from "framer-motion";
import { slideVertical, staggerContainer } from "@/utils/framerMotion";

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
          <motion.div
            initial="hide"
            whileInView="active"
            variants={staggerContainer(0.4, 0.5)}
            className={wrapperImages}
          >
            <motion.div variants={slideVertical("-3.125rem")}>
              <Image
                src={img2}
                alt="img-2"
                sizes="(min-width: 768px) 388px, 194px"
                className={sectionTwoimage2}
              />
            </motion.div>
            <motion.div
              className={sectionTwoimage1}
              variants={slideVertical("-20%", undefined, undefined, {
                y: "-50%",
              })}
            >
              <Image
                src={img1}
                alt="img-1"
                sizes="(min-width: 768px) 204px, 102px"
              />
            </motion.div>

            <svg
              className={sectionTwoElSVG}
              width="435"
              height="303"
              viewBox="0 0 435 303"
              fill="none"
            >
              <motion.path
                variants={{
                  hide: {
                    pathLength: 0,
                    strokeWidth: 16,
                    strokeLinecap: "round",
                    opacity: 0,
                  },
                  active: {
                    pathLength: 1,
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1,
                      type: "tween",
                      ease: "easeOut",
                      opacity: { duration: 0 },
                    },
                  },
                }}
                d="M417.674 23.5C423.736 43.0931 427 63.9154 427 85.5C427 201.204 333.204 295 217.5 295C101.796 295 8 201.204 8 85.5C8 58.5029 13.1065 32.6985 22.4064 9"
                stroke="#F9BA45"
                stroke-width="16"
                stroke-linecap="round"
              />
            </svg>
          </motion.div>
        </div>

        <motion.div
          initial="hide"
          whileInView="active"
          variants={staggerContainer(0.4, 0.5)}
          className="px-2 text-center lg:text-start lg:px-0"
        >
          <motion.h3
            variants={slideVertical("1.5625rem")}
            className={`${head1} text-seventh`}
          >
            WHY CHOOSE US
          </motion.h3>
          <motion.h3 variants={slideVertical("1.5625rem")} className={head2}>
            Find Favorites and Discover New Ones
          </motion.h3>
          <motion.p
            variants={slideVertical("1.5625rem")}
            className={`${description} text-18 mb-11 mt-7`}
          >
            At vero eos et accusamus et iusto odio dignissimos ducimus
            blanditiis praesen voluptatum deleniti.
          </motion.p>

          <motion.div variants={slideVertical("1.5625rem")}>
            <Button className="w-2/4 mx-auto lg:mx-0 lg:w-fit" type="primary">
              Explore Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionTwo;

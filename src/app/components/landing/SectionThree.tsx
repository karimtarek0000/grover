"use client";

import Button from "../shared/buttons/Buttons";
import Style from "./style.module.css";
import Image from "next/image";
import img1 from "@/assets/images/section-4/1.png";
import img2 from "@/assets/images/section-4/2.png";
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
  section3Wrapper,
  sectionThreeCol1,
  sectionThreeCol2,
  sectionThreeimage2,
  sectionThreeElSVG,
} = Style;

const SectionThree = (): JSX.Element => {
  return (
    <section className="pb-20 lg:pb-44 container-inner">
      <div className={section3Wrapper}>
        <motion.div
          initial="hide"
          whileInView="active"
          variants={staggerContainer(0.4, 0.5)}
          className={sectionThreeCol1}
        >
          <motion.h3
            variants={slideVertical("1.5625rem")}
            className={`${head1} uppercase text-seventh`}
          >
            HOME DELIVERY
          </motion.h3>
          <motion.h3 variants={slideVertical("1.5625rem")} className={head2}>
            Sit at Home We Will Take Care Your Order
          </motion.h3>
          <motion.p
            variants={slideVertical("1.5625rem")}
            className={`${description} text-18 mb-11 mt-7`}
          >
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
          </motion.p>
          <motion.div variants={slideVertical("1.5625rem")}>
            <Button className="w-2/4 mx-auto lg:mx-0 lg:w-fit" type="secondary">
              Explore Now
            </Button>
          </motion.div>
        </motion.div>

        <div className={sectionThreeCol2}>
          <motion.div
            initial="hide"
            whileInView="active"
            variants={staggerContainer(0.4, 1)}
            className="relative"
          >
            <motion.div variants={slideVertical("-4.375rem")}>
              <Image
                src={img1}
                sizes="(min-width: 768px) 417px, 208px"
                width="417"
                alt="img-1"
              />
            </motion.div>
            <motion.div
              className={sectionThreeimage2}
              variants={slideHorizontal("3.125rem", undefined, { y: "-50%" })}
            >
              <Image
                src={img2}
                sizes="(min-width: 768px) 166px, 83px"
                alt="img-2"
              />
            </motion.div>

            <svg
              width="48"
              height="40"
              fill="none"
              className={sectionThreeElSVG}
            >
              <motion.path
                variants={{
                  hide: {
                    pathLength: 0,
                    strokeWidth: 9,
                    opacity: 0,
                  },
                  active: {
                    pathLength: 1,
                    opacity: 1,
                    transition: {
                      type: "tween",
                      ease: "easeOut",
                      duration: 0.75,
                      opacity: {
                        duration: 0,
                      },
                    },
                  },
                }}
                stroke="#F9BA45"
                stroke-width="9"
                d="M3.99998 16.1772C9.99329 5.97046 23.126 1.61848 33.3327 7.61179 43.5394 13.6051 45.8293 26.7122 39.836 36.9189"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;

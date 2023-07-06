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
            <motion.div variants={slideVertical("-3.75rem")}>
              <Image
                src={img1}
                sizes="(min-width: 768px) 417px, 208px"
                width="417"
                alt="img-1"
              />
            </motion.div>
            <motion.div
              className={sectionThreeimage2}
              variants={slideHorizontal("1.875rem", undefined, { y: "-50%" })}
            >
              <Image
                src={img2}
                sizes="(min-width: 768px) 166px, 83px"
                alt="img-2"
              />
            </motion.div>

            <svg
              className={sectionThreeElSVG}
              width="48"
              height="38"
              viewBox="0 0 48 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                variants={{
                  hide: {
                    pathLength: 0,
                    opacity: 0,
                  },
                  active: {
                    pathLength: 1,
                    opacity: 1,
                  },
                }}
                d="M44.5334 37.6508C46.1429 34.7435 47.164 31.5476 47.5384 28.2457C47.9128 24.9438 47.6331 21.6004 46.7154 18.4066C45.7977 15.2127 44.2599 12.2309 42.1898 9.63136C40.1197 7.03181 37.5579 4.86545 34.6506 3.25598C31.7433 1.6465 28.5474 0.625419 25.2455 0.251037C21.9435 -0.123345 18.6002 0.156303 15.4063 1.07401C12.2125 1.99172 9.23066 3.52952 6.63112 5.59961C4.03157 7.6697 1.86522 10.2315 0.25574 13.1389L9.13127 18.0523C10.0955 16.3105 11.3934 14.7758 12.9507 13.5356C14.5081 12.2954 16.2945 11.3741 18.208 10.8243C20.1214 10.2745 22.1244 10.107 24.1025 10.3313C26.0807 10.5555 27.9953 11.1673 29.7371 12.1315C31.4789 13.0957 33.0137 14.3936 34.2538 15.951C35.494 17.5084 36.4153 19.2948 36.9651 21.2082C37.5149 23.1216 37.6825 25.1246 37.4582 27.1028C37.2339 29.081 36.6221 30.9956 35.6579 32.7373L44.5334 37.6508Z"
                fill="#F9BA45"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;

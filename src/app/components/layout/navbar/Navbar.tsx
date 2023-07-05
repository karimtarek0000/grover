"use client";

import Logo from "../../shared/logo/Logo";
import Links from "./Links";
import Search from "./Search";
import Style from "./style.module.css";
import { motion } from "framer-motion";
import { slideVertical } from "@/utils/framerMotion";

const { navbar } = Style;

const Navbar = (): JSX.Element => {
  return (
    <motion.nav
      initial="hide"
      animate="active"
      variants={slideVertical("-50px")}
      className={navbar}
    >
      <div className="md:basis-[15%]">
        <Logo />
      </div>
      <Links />
      <Search />
    </motion.nav>
  );
};

export default Navbar;

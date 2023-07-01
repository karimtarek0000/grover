"use client";

import Link from "next/link";
import RenderSVG from "../../shared/SVG/RenderSVG";
import style from "./style.module.css";

const { searchWrapper, search, cart, input } = style;

const Search = (): JSX.Element => {
  return (
    <div className={searchWrapper}>
      <div className={search}>
        <RenderSVG name="search" size="1.2rem" />
      </div>

      <input className={input} type="text" placeholder="Search" />

      <Link href="/" className={cart}>
        <RenderSVG name="cart" size="1.5rem" />
      </Link>
    </div>
  );
};

export default Search;

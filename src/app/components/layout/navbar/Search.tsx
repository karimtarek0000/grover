"use client";

import Link from "next/link";
import RenderSVG from "../../shared/SVG/RenderSVG";
import Style from "./style.module.css";

const { searchWrapper, search, cart, cartCount, input } = Style;

const Search = (): JSX.Element => {
  return (
    <div className={searchWrapper}>
      <div className={search}>
        <RenderSVG name="search" size="1.2rem" />
      </div>

      <input className={input} type="text" placeholder="Search" />

      <Link href="/" className={cart}>
        <span className={cartCount}>2</span>
        <RenderSVG name="cart" size="1.5rem" />
      </Link>
    </div>
  );
};

export default Search;

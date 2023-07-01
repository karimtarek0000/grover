"use client";

import RenderSVG from "../../shared/SVG/RenderSVG";

const Search = (): JSX.Element => {
  return (
    <div className="flex">
      <input type="text" placeholder="search" />
      <RenderSVG name="cart" size="1.5rem" />
    </div>
  );
};

export default Search;

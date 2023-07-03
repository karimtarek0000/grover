"use client";

import { ReactNode } from "react";
import Style from "../../shared/buttons/style.module.css";

type ButtonProps = {
  children: ReactNode;
  type?: string;
  className?: string;
};

const Button = ({
  children,
  className = "",
  type = "",
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`${Style.default} ${Style[type as string]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

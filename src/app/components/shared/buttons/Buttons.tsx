"use client";

import { ReactNode } from "react";
import Style from "../../shared/buttons/style.module.css";

type ButtonProps = {
  children: ReactNode;
  type?: string;
};

const Button = ({ children, type = "" }: ButtonProps): JSX.Element => {
  return (
    <button className={`${Style.default} ${Style[type as string]}`}>
      {children}
    </button>
  );
};

export default Button;

import React from "react";
import { Wrapper } from "./styles";

export interface IBackground {
  children: React.ReactNode;
}

const Background = ({ children }: IBackground) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Background;

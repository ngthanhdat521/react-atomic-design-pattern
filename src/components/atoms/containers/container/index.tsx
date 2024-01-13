import React from "react";
import BaseContainer from "@mui/material/Container";
import { Breakpoint } from "@mui/material";

interface IProps {
  children: React.ReactNode;
  maxWidth?: Breakpoint | false;
}

export const Container: React.FC<IProps> = (props) => {
  const { children, maxWidth } = props;

  return <BaseContainer maxWidth={maxWidth}>{children}</BaseContainer>;
};

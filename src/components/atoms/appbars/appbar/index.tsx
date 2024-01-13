import React, { ReactNode } from "react";
import BaseAppBar from "@mui/material/AppBar";

interface IProps {
  children: ReactNode;
  position?: "fixed" | "absolute" | "sticky" | "static" | "relative";
}

export const AppBar: React.FC<IProps> = (props) => {
  const { children, position } = props;

  return <BaseAppBar position={position}>{children}</BaseAppBar>;
};

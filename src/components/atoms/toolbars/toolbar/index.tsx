import React from "react";
import BaseToolbar from "@mui/material/Toolbar";

interface IProps {
  children: React.ReactNode;
  disableGutters?: boolean;
}

export const Toolbar: React.FC<IProps> = (props) => {
  const { children, disableGutters } = props;

  return <BaseToolbar disableGutters={disableGutters}>{children}</BaseToolbar>;
};

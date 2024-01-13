import BaseTooltip from "@mui/material/Tooltip";
import React, { ReactElement, ReactNode } from "react";

interface IProps {
  children: ReactElement<any, any>;
  title: ReactNode;
}

export const Tooltip: React.FC<IProps> = (props) => {
  const { title, children } = props;

  return <BaseTooltip title={title}>{children}</BaseTooltip>;
};

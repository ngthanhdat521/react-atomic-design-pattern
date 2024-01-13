import BaseListItemIcon from "@mui/material/ListItemIcon";
import React, { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

export const ListItemIcon: React.FC<IProps> = (props) => {
  const { children } = props;

  return <BaseListItemIcon>{children}</BaseListItemIcon>;
};

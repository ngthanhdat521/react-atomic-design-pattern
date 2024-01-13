import BaseListItemButton from "@mui/material/ListItemButton";
import React, { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

export const ListItemButton: React.FC<IProps> = (props) => {
  const { children } = props;

  return <BaseListItemButton>{children}</BaseListItemButton>;
};

import BaseListItem from "@mui/material/ListItem";
import React, { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
  disablePadding?: boolean;
}

export const ListItem: React.FC<IProps> = (props) => {
  const { children, disablePadding } = props;

  return <BaseListItem disablePadding={disablePadding}>{children}</BaseListItem>;
};

import BaseListItemText from "@mui/material/ListItemText";
import React, { ReactNode } from "react";

interface IProps {
  primary?: ReactNode;
}

export const ListItemText: React.FC<IProps> = (props) => {
  const { primary } = props;

  return <BaseListItemText primary={primary} />;
};

import BaseMenuItem from "@mui/material/MenuItem";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  onClick: React.MouseEventHandler;

}

export const MenuItem: React.FC<IProps> = (props) => {
  const { children, onClick } = props;

  return (
    <BaseMenuItem onClick={onClick}>
      {children}
    </BaseMenuItem>
  );
};

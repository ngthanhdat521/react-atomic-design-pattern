import { SxProps, Theme } from "@mui/material";
import BaseButton from "@mui/material/Button";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  onClick?: React.MouseEventHandler;
  sx?: SxProps<Theme>;
}

export const Button: React.FC<IProps> = (props) => {
  const { children, sx, onClick } = props;

  return (
    <BaseButton
      onClick={onClick}
      sx={sx}
    >
      {children}
    </BaseButton>
  );
};

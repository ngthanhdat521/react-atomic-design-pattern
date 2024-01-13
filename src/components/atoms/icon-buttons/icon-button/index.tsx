import { SxProps, Theme } from "@mui/material";
import BaseIconButton from "@mui/material/IconButton";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  onClick: React.MouseEventHandler;
  sx?: SxProps<Theme>;
}

export const IconButton: React.FC<IProps> = (props) => {
  const { children, sx, onClick } = props;

  return (
    <BaseIconButton
      onClick={onClick}
      sx={sx}
    >
      {children}
    </BaseIconButton>
  );
};

import { SxProps, Theme } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
  container?: boolean;
  spacing?: number;
  xl?: number;
  sx?: SxProps<Theme>; 
}

export const GridLayout: React.FC<IProps> = (props) => {
  const { children, container, spacing, xl, sx } = props;
  return (
    <Grid sx={sx} xl={xl} container={container} spacing={spacing}>
      {children}
    </Grid>
  );
};

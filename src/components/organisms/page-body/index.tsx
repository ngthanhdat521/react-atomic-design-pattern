import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const PageBody: React.FC<IProps> = (props) => {
  const { children } = props;

  return (
    <Box sx={{ paddingY: 3 }}>
      {children}
    </Box>
  );
};

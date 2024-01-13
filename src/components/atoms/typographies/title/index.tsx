import Typography from "@mui/material/Typography";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const Title: React.FC<IProps> = (props) => {
  const { children } = props;

  return (
    <Typography variant="h5" noWrap component="b">
      {children}
    </Typography>
  );
};

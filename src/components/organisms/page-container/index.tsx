import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const PageContainer: React.FC<IProps> = (props) => {
  const { children } = props;

  return <Box sx={{ display: "block", padding: 5 }}>{children}</Box>;
};

export default PageContainer;

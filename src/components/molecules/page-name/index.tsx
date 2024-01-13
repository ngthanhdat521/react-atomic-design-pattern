import { Title } from "@/components/atoms/typographies";
import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const PageName: React.FC<IProps> = (props) => {
  const { children } = props;

  return (
    <Box sx={{ display: "flex" }}>
      <Title>{children}</Title>
    </Box>
  );
};

export default PageName;

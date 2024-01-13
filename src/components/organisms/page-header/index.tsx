import { Box } from "@mui/material";
import React, { ReactNode } from "react";

const PageName = React.lazy(() => import("@/components/molecules/page-name"));

interface IProps {
  children: ReactNode;
}

export const PageHeader: React.FC<IProps> = (props) => {
  const { children } = props;

  return (
    <Box sx={{ display: "flex", paddingBottom: 3 }}>
      <PageName>{children}</PageName>
    </Box>
  );
};

export default PageHeader;

import { Button } from "@/components/atoms/buttons";
import { PAGES } from "@/constant/common";
import { Box } from "@mui/material";
import React from "react";

interface IProps {
  onCloseNavMenu: () => void;
}

export const PageLinks: React.FC<IProps> = (props) => {
  const { onCloseNavMenu } = props;    
  
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {PAGES.map((page) => (
        <Button
          key={page}
          onClick={onCloseNavMenu}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
};

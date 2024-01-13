import { Box } from "@mui/material";
import React from "react";
import AdbIcon from "@mui/icons-material/Adb";
import { Logo } from "@/components/atoms/typographies";

export const BaseLogo: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Logo />
    </Box>
  );
}

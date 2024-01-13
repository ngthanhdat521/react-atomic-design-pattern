import * as React from "react";
import BaseDrawer, { DrawerProps } from "@mui/material/Drawer";

export const Drawer: React.FC<DrawerProps> = (props) => {
  return <BaseDrawer {...props} />;
};

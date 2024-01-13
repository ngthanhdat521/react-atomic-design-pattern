import React, { ReactNode } from "react";
import { Drawer } from "@/components/atoms/drawers";

interface IProps {
  children: ReactNode;
}

export const SidebarContainer: React.FC<IProps> = (props) => {
  const { children } = props;

  return (
    <Drawer
      variant="permanent"
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          position: "relative",
          width: "100%",
          height: "100%",
        },
        "&.MuiDrawer-root": {
          width: "100%",
          height: "100%",
        },
      }}
      open
    >
      {children}
    </Drawer>
  );
};

export default SidebarContainer;

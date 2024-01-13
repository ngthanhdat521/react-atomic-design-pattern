"use client";

import { Box } from "@mui/material";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import React, { ReactNode } from "react";
import { DialogProvider } from "@/providers/dialog-provider";

const MasterPageGrid = React.lazy(
  () => import("@/components/molecules/master-page-grid")
);
const Navbar = React.lazy(() => import("@/components/organisms/navbar"));
const Sidebar = React.lazy(() => import("@/components/organisms/sidebar"));

interface IProps {
  children: ReactNode;
}

export const MasterPage: React.FC<IProps> = (props) => {
  const { children } = props;

  return (
    <Provider store={store}>
      <DialogProvider>
        <Box>
          <Navbar />
          <MasterPageGrid>
            <Sidebar />
            {children}
          </MasterPageGrid>
        </Box>
      </DialogProvider>
    </Provider>
  );
};

export default MasterPage;

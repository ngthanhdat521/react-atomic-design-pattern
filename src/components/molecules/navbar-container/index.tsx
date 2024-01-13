import * as React from "react";
import { AppBar } from "@/components/atoms/appbars";
import { Container } from "@/components/atoms/containers";
import { Toolbar } from "@/components/atoms/toolbars";

interface IProps {
  children: React.ReactNode;
}

export const NavbarContainer: React.FC<IProps> = (props) => {
  const { children } = props;

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>{children}</Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavbarContainer;

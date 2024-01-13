"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import {
  AvatarDropdown,
  BaseLogo,
  MenuDropdown,
  PageLinks,
} from "@/components/molecules";
// import { NavbarContainer } from "@/components/molecules";
const NavbarContainer = React.lazy(() => import ('@/components/molecules/navbar-container'));

export const Navbar: React.FC = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <NavbarContainer>
      <BaseLogo />
      <PageLinks onCloseNavMenu={() => console.log("test")} />

      <Box sx={{ flexGrow: 0 }}>
        <AvatarDropdown onOpenUserMenu={handleOpenUserMenu} />
        <MenuDropdown
          anchorEl={anchorElUser}
          onCloseUserMenu={handleCloseUserMenu}
        />
      </Box>
    </NavbarContainer>
  );
};

export default Navbar;

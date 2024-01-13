import { Menu } from "@/components/atoms/menus";
import { SETTINGS } from "@/constant/common";
import { MenuItem, PopoverProps } from "@mui/material";
import React from "react";

interface IProps {
  onCloseUserMenu: () => void;
  anchorEl: PopoverProps["anchorEl"];
}

export const MenuDropdown: React.FC<IProps> = (props) => {
  const { anchorEl, onCloseUserMenu } = props;

  return (
    <Menu
      sx={{ mt: "45px" }}
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorEl)}
      onClose={onCloseUserMenu}
    >
      {SETTINGS.map((setting) => (
        <MenuItem key={setting} onClick={onCloseUserMenu}>
          {setting}
        </MenuItem>
      ))}
    </Menu>
  );
};

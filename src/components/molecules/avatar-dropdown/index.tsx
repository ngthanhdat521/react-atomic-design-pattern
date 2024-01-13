import { MenuAvatar } from "@/components/atoms/avatars";
import { IconButton } from "@/components/atoms/icon-buttons";
import { Tooltip } from "@/components/atoms/tooltips";
import React from "react";

interface IProps {
  onOpenUserMenu: React.MouseEventHandler;
}

export const AvatarDropdown: React.FC<IProps> = (props) => {
  const { onOpenUserMenu } = props;

  return (
    <Tooltip title="Open settings">
      <IconButton onClick={onOpenUserMenu} sx={{ p: 0 }}>
        <MenuAvatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
      </IconButton>
    </Tooltip>
  );
};

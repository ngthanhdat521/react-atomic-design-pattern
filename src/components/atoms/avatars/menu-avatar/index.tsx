import Avatar from "@mui/material/Avatar";
import React from "react";

interface IProps {
  alt: string;
  src: string;
}

export const MenuAvatar: React.FC<IProps> = (props) => {
  const { alt, src } = props;

  return <Avatar alt={alt} src={src} />;
};

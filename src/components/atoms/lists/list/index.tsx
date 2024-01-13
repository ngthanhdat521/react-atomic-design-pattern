import BaseList from '@mui/material/List';
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const List: React.FC<IProps> = (props) => {
  const { children } = props;

  return <BaseList>{children}</BaseList>;
};

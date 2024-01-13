import { GridLayout } from "@/components/atoms/grids";
import React, { ReactNode } from "react";

interface IProps {
  children: [ReactNode, ReactNode];
}

export const MasterPageGrid: React.FC<IProps> = (props) => {
  const { children } = props;

  return (
    <GridLayout sx={{ height: 'calc(100vh - 68.5px)'}} container>
      <GridLayout xl={2}>{children[0]}</GridLayout>
      <GridLayout xl={10}>{children[1]}</GridLayout>
    </GridLayout>
  );
};

export default MasterPageGrid;

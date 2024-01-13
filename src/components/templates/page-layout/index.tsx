import { Divider } from "@/components/atoms/dividers";
import { PageContainer, PageHeader } from "@/components/organisms";
import { PageBody } from "@/components/organisms/page-body";
import React, { ReactNode } from "react";

interface IProps {
  children: [ReactNode, ReactNode]
}

export const PageLayout: React.FC<IProps> = (props) => {
  const { children } = props;

  return (
    <PageContainer>
      <PageHeader>{children[0]}</PageHeader>
      <Divider />
      <PageBody>{children[1]}</PageBody>
    </PageContainer>
  );
};

export default PageLayout;

"use client";

import { Button } from "@/components/atoms/buttons";
import PageLayout from "@/components/templates/page-layout";
import { useDialog } from "@/hooks/useDialog";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
// import { show } from "@/redux/dialog";
import { useDispatch } from 'react-redux'

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { show } = useDialog();

  return (
    <PageLayout>
      <Typography>Home</Typography>
      <Box>
        <Typography>Home Page - Content</Typography>
        <Button onClick={() => dispatch(show())}>Open</Button>
      </Box>
    </PageLayout>
  );
};

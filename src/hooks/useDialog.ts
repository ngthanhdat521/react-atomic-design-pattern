"use client";

import { Reducers } from "@/redux/store";
import { useSelector } from "react-redux";
import { show, hide } from "@/redux/dialog";

export const useDialog = () => {
  const dialog = useSelector((state: Reducers) => state.dialogReducer.dialog);

  return {
    dialog,
    show,
    hide
  };
};

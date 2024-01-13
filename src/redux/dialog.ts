import { createSlice } from "@reduxjs/toolkit";

interface Dialog {
  id: number;
  title: string;
  open: boolean;
  content: string;
}

export interface DialogReducer {
  dialog: Dialog;
}

const initialState: DialogReducer = {
  dialog: {
    id: 1,
    title: "Title Demo",
    content: "Content Demo",
    open: false,
  },
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    show(state) {
      state.dialog.open = true;
    },
    hide(state) {
      state.dialog.open = false;
    },
  },
});

export const { show, hide } = dialogSlice.actions;
export default dialogSlice.reducer;

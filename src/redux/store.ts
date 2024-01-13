import { Reducer, configureStore } from "@reduxjs/toolkit";
import dialogReducer, { DialogReducer } from "./dialog";

export const store = configureStore({
  reducer: {
    dialogReducer: dialogReducer,
  },
});

export interface Reducers {
  dialogReducer: DialogReducer
}


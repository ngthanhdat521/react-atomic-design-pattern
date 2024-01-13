import { Dialog } from "@/components/organisms";
import { useDialog } from "@/hooks/useDialog";
import * as React from "react";
import { useDispatch } from "react-redux";

interface IProps {
  children: React.ReactNode;
}

export const DialogProvider: React.FC<IProps> = (props) => {
  const { dialog, hide } = useDialog();
  const dispatch = useDispatch();
  const { children } = props;

  return (
    <React.Fragment>
      <Dialog open={dialog.open} title={dialog.title} content={dialog.content} onClose={() => dispatch(hide())} />
      {children}
    </React.Fragment>
  );
};

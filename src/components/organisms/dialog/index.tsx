import * as React from "react";
import Button from "@mui/material/Button";
import BaseDialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface IProps {
  open: boolean;
  title: string;
  content: string;
  onClose: () => void;
}

export const Dialog: React.FC<IProps> = (props) => {
  const { open, content, title, onClose } = props;

  return (
    <React.Fragment>
      <BaseDialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Disagree</Button>
          <Button onClick={onClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </BaseDialog>
    </React.Fragment>
  );
};

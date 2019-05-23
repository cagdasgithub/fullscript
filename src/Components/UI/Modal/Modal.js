import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

const Modal = props => {
  return (
    <React.Fragment>
      <Dialog
        onClose={props.onClose}
        aria-labelledby="simple-dialog-title"
        open={props.open}
      >
        <DialogTitle id="simple-dialog-title">Email photo to user</DialogTitle>
        {props.children}
      </Dialog>
    </React.Fragment>
  );
};

export default Modal;

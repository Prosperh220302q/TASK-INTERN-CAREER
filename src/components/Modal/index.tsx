import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

interface ModalOverlayProps {
  children: React.ReactNode;
}

const ModalOverlay: React.FC<ModalOverlayProps> = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

interface BackDropProps {
  onClick: () => void;
}

const BackDrop: React.FC<BackDropProps> = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const portalElement = document.getElementById("overlay");

interface ModalProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onClick} />,
        portalElement!
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement!
      )}
    </Fragment>
  );
};

export default Modal;


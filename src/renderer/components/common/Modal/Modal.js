import React from "react";

const Modal = ({ open, handleClose, title, children }) => {
  return (
    <div className={`modal ${open ? "active" : ""}`} id="modal-id">
      <a
        href="#close"
        className="modal-overlay"
        aria-label="Close"
        onClick={handleClose}
      ></a>
      <div className="modal-container">
        <div className="modal-header">
          <a
            href="#close"
            className="btn btn-clear float-right"
            aria-label="Close"
            onClick={handleClose}
          ></a>
          <div className="modal-title h5">{title}</div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;

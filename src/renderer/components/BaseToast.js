import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import {
  mdiCheck,
  mdiAlertRhombus,
  mdiAlert,
  mdiInformationOutline,
} from "@mdi/js";
import styled from "styled-components";

const Toast = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BaseToast = ({ variant = "error", message, open, onClick }) => {
  const [icon, setIcon] = useState();
  const [className, setClassName] = useState("toast-primary");

  useEffect(() => {
    switch (variant) {
      case "success":
        setClassName("toast-success");
        setIcon(mdiCheck);
        break;
      case "error":
        setClassName("toast-error");
        setIcon(mdiAlertRhombus);
        break;
      case "warning":
        setClassName("toast-warning");
        setIcon(mdiAlert);
        break;
      case "primary":
        setClassName("toast-primary");
        setIcon(mdiInformationOutline);
        break;
    }
  }, []);

  return (
    <Toast
      className={`toast ${className}`}
      style={{ display: open ? "flex" : "none" }}
    >
      <Message>
        {icon && (
          <Icon
            path={icon}
            size={icon === mdiAlertRhombus ? 4 : 1}
            className="mr-1"
          />
        )}
        {message}
      </Message>
      <button className="btn btn-clear float-right" onClick={onClick}></button>
    </Toast>
  );
};

export default BaseToast;

import React, { useState } from "react";
import styled from "styled-components";

import ModalNewConnection from "./ModalNewConnection";

const formState = {
  name: "",
  client: "postgresql",
  host: "127.0.0.1",
  port: "5432",
  user: "",
  password: "",
};

const AppWelcome = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(formState);

  const toggleModal = () => {
    console.log(open);
    setOpen((prev) => !prev);
  };

  const handleChange = (e) => {
    console.log(e.target);
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(form);
  return (
    <WelcomeWrapper>
      <BottomSpacing>
        <h4>Welcome to SEQL Database Client!</h4>
      </BottomSpacing>
      <BottomSpacing>
        <p>Step 1: Create a new database connection.</p>
      </BottomSpacing>
      <BottomSpacing>
        <button className="btn btn-error" onClick={toggleModal}>
          Create connection
        </button>
      </BottomSpacing>

      <ModalNewConnection
        open={open}
        handleClose={toggleModal}
        handleChange={handleChange}
        form={form}
      />
    </WelcomeWrapper>
  );
};

export default AppWelcome;

const WelcomeWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const BottomSpacing = styled.div`
  margin-bottom: 10px;
`;

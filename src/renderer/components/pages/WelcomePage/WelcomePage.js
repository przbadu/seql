import React, { useState } from "react";
import styled from "styled-components";
import { TextField } from "../../common";
import Modal from "../../common/Modal/Modal";

const WelcomeWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Spacing = styled.div`
  margin-bottom: 10px;
`;

const Button = styled.button`
  margin-right: 10px;
`;

const formState = {
  name: "",
  client: "",
  host: "",
  port: "",
  user: "",
  password: "",
};

const WelcomePage = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(formState);

  const toggleModal = () => {
    console.log(open);
    setOpen((prev) => !prev);
  };

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  console.log(form);
  return (
    <WelcomeWrapper>
      <Spacing>
        <h4>Welcome to SEQL Database Client!</h4>
      </Spacing>
      <Spacing>
        <p>Step 1: Create a new database connection.</p>
      </Spacing>
      <Spacing>
        <button className="btn btn-error" onClick={toggleModal}>
          Create connection
        </button>
      </Spacing>

      <Modal open={open} handleClose={toggleModal}>
        <form className="form-horizontal">
          <div className="modal-body">
            <div className="content">
              <TextField
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="modal-footer">
            <Button className="btn error">Test Connection</Button>
            <Button className="btn btn-primary mr">Save & Connect</Button>
          </div>
        </form>
      </Modal>
    </WelcomeWrapper>
  );
};

export default WelcomePage;

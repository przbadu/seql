import React, { useState } from "react";

import { WelcomeWrapper, Spacing, Button } from "./WelcomePage.styled";
import { TextField } from "../../common";
import Modal from "../../common/Modal/Modal";

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

  const handleChange = (e) => {
    console.log(e.target);
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                name="name"
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

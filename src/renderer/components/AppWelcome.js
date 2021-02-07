import React, { useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(formState);

  const toggleModal = () => {
    setOpen((prev) => !prev);
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <WelcomeWrapper>
      <BottomSpacing>
        <h4>{t("message.appWelcome")}</h4>
      </BottomSpacing>
      <BottomSpacing>
        <p>{t("message.createNewDbCon")}</p>
      </BottomSpacing>
      <BottomSpacing>
        <button className="btn btn-error" onClick={toggleModal}>
          {t("word.createConn")}
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

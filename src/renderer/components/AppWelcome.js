import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import ModalNewConnection from "./ModalNewConnection";
import Connection from "../ipc-api/Connection";
import * as actionTypes from "../store/actionType";
import { uidGen } from "../../common/lib/uidGen";

const formState = {
  name: "",
  client: "mysql",
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
};

const testConnectionState = {
  connecting: false,
  error: false,
  success: false,
};

const AppWelcome = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const appSetting = useSelector((state) => state.appSetting);
  const [form, setForm] = useState(formState);
  const [testConnectionResult, setTestConnectionResult] = useState(
    testConnectionState
  );

  const toggleModal = () => {
    if (appSetting.showConnectionDialog)
      dispatch({ type: actionTypes.HIDE_CONNECTION_DIALOG });
    else dispatch({ type: actionTypes.SHOW_CONNECTION_DIALOG });
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCloseToast = (e) => {
    e.preventDefault();
    setTestConnectionResult((state) => ({ ...state, ...testConnectionState }));
  };

  const handleTestConnection = async (e) => {
    e.preventDefault();
    setTestConnectionResult((state) => ({ ...state, connecting: true }));

    const res = await Connection.testConnection(form);

    if (res.status === "error") {
      setTestConnectionResult((state) => ({
        ...state,
        error: res.message,
        success: false,
      }));
    } else {
      setTestConnectionResult((state) => ({
        ...state,
        success: true,
        error: false,
      }));
    }

    setTestConnectionResult((state) => ({ ...state, connecting: false }));
  };

  const handleSaveAndContinue = (e) => {
    e.preventDefault();
    const payload = { ...form, uid: uidGen("CONN") };
    dispatch({ type: actionTypes.ADD_CONNECTION, payload: payload });
    toggleModal();
  };

  return (
    <WelcomeWrapper>
      <BottomSpacing>
        <h4>{t("message.appWelcome")}</h4>
      </BottomSpacing>
      <BottomSpacing>
        <p>{t("message.createNewDbConn")}</p>
      </BottomSpacing>
      <BottomSpacing>
        <button className="btn btn-error" onClick={toggleModal}>
          {t("word.createConn")}
        </button>
      </BottomSpacing>

      <ModalNewConnection
        open={appSetting.showConnectionDialog}
        onClose={toggleModal}
        onChange={handleChange}
        testConnectionResult={testConnectionResult}
        onTestConnection={handleTestConnection}
        onConnect={handleSaveAndContinue}
        form={form}
        handleCloseToast={handleCloseToast}
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

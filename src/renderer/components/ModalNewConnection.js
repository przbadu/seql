import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import BaseToast from "./BaseToast";
import BaseLoader from "./BaseLoader";
import * as actionTypes from "../store/actionType";
import Connection from "../ipc-api/Connection";
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

const ModalNewConnection = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const appSetting = useSelector((state) => state.appSetting);
  const [form, setForm] = useState(formState);
  const [testConnectionResult, setTestConnectionResult] = useState(
    testConnectionState
  );

  const handleCloseConnectionDialog = (e) => {
    dispatch({ type: actionTypes.HIDE_CONNECTION_DIALOG });
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
    handleCloseConnectionDialog();
  };

  const handleCloseToast = (e) => {
    e.preventDefault();
    setTestConnectionResult((state) => ({ ...state, ...testConnectionState }));
  };

  return (
    <form className="form-horizontal">
      <div
        className={`modal ${appSetting.showConnectionDialog ? "active" : ""}`}
      >
        <a
          href="#close"
          className="modal-overlay c-hand"
          aria-label="Close"
          onClick={handleCloseConnectionDialog}
        ></a>
        <ModalContainer className="modal-container">
          <div className="modal-header pl-2">
            <ModalTitle className="modal-title h6">
              <h6 style={{ textTransform: "uppercase" }}>
                {t("message.createNewConn")}
              </h6>

              <a
                className="btn btn-clear c-hand"
                aria-label="Close"
                onClick={handleCloseConnectionDialog}
              ></a>
            </ModalTitle>
          </div>
          <div className="modal-body">
            <div className="content">
              <div className="form-group">
                <div className="col-4 col-sm-12">
                  <label className="form-label">
                    {t("word.connectionName")}
                  </label>
                </div>
                <div className="col-8 col-sm-12">
                  <input
                    className="form-input"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-4 col-sm-12">
                  <label className="form-label">{t("word.client")}</label>
                </div>
                <div className="col-8 col-sm-12">
                  <select
                    className="form-select"
                    name="client"
                    className="form-input"
                    value={form.client}
                    onChange={handleChange}
                  >
                    <option value="mysql">MySQL</option>
                    <option value="mariadb">MariaDB</option>
                    <option value="postgresql">PostgreSQL</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <div className="col-4 col-sm-12">
                  <label htmlFor="" className="form-label">
                    {t("word.hostName")}/IP
                  </label>
                </div>
                <div className="col-8 col-sm-12">
                  <input
                    className="form-input"
                    name="host"
                    value={form.host}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="col-4 col-sm-12">
                  <label className="form-label">{t("word.port")}</label>
                </div>
                <div className="col-8 col-sm-12">
                  <input
                    className="form-input"
                    name="port"
                    value={form.port}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="col-4 col-sm-12">
                  <label className="form-label">{t("word.user")}</label>
                </div>
                <div className="col-8 col-sm-12">
                  <input
                    className="form-input"
                    name="user"
                    value={form.user}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="col-4 col-sm-12">
                  <label className="form-label">{t("word.password")}</label>
                </div>
                <div className="col-8 col-sm-12">
                  <input
                    type="password"
                    className="form-input"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {testConnectionResult.connecting && <BaseLoader />}
              {testConnectionResult.error.message && (
                <BaseToast
                  variant="error"
                  message={testConnectionResult.error.message}
                  open
                  onClick={handleCloseToast}
                />
              )}
              {testConnectionResult.success && (
                <BaseToast
                  variant="success"
                  message={t("message.successTestConn")}
                  open
                  onClick={handleCloseToast}
                />
              )}
            </div>
          </div>
          <ModalFooter className="modal-footer">
            <button onClick={handleTestConnection} className="btn btn-error">
              {t("word.testConn")}
            </button>
            <button className="btn btn-primary" onClick={handleSaveAndContinue}>
              {t("word.saveAndContinue")}
            </button>
          </ModalFooter>
        </ModalContainer>
      </div>
    </form>
  );
};

export default ModalNewConnection;

const ModalContainer = styled.div`
  position: absolute;
  max-width: 550px;
  top: 17.5vh;
`;

const ModalTitle = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

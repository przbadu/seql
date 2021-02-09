import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import BaseToast from "./BaseToast";
import BaseLoader from "./BaseLoader";

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

const ModalNewConnection = ({
  open,
  form,
  onClose,
  onChange,
  testConnectionResult,
  onTestConnection,
  onConnect,
  handleCloseToast,
}) => {
  const { t } = useTranslation();

  return (
    <form className="form-horizontal">
      <div className={`modal ${open ? "active" : ""}`}>
        <a
          href="#close"
          className="modal-overlay c-hand"
          aria-label="Close"
          onClick={onClose}
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
                onClick={onClose}
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
                    onChange={onChange}
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
                    onChange={onChange}
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
                    onChange={onChange}
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
                    onChange={onChange}
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
                    onChange={onChange}
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
                    onChange={onChange}
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
            <button onClick={onTestConnection} className="btn btn-error">
              {t("word.testConn")}
            </button>
            <button className="btn btn-primary" onClick={onConnect}>
              {t("word.saveAndContinue")}
            </button>
          </ModalFooter>
        </ModalContainer>
      </div>
    </form>
  );
};

export default ModalNewConnection;

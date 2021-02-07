import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

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

const ModalNewConnection = ({ open, form, handleClose, handleChange }) => {
  const { t } = useTranslation();

  return (
    <form className="form-horizontal">
      <div className={`modal ${open ? "active" : ""}`}>
        <a
          href="#close"
          className="modal-overlay c-hand"
          aria-label="Close"
          onClick={handleClose}
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
                onClick={handleClose}
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
            </div>
          </div>
          <ModalFooter className="modal-footer">
            <button className="btn btn-error">{t("word.testConn")}</button>
            <button className="btn btn-primary">
              {t("word.saveAndContinue")}
            </button>
          </ModalFooter>
        </ModalContainer>
      </div>
    </form>
  );
};

export default ModalNewConnection;

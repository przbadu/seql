import React from "react";
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
                Create new Connection
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
                  <label className="form-label">Connection Name</label>
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
                  <label className="form-label">Client</label>
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
                    Host name/IP
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
                  <label className="form-label">Port</label>
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
                  <label className="form-label">User</label>
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
                  <label className="form-label">Password</label>
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
            <button className="btn btn-error">Test Connection</button>
            <button className="btn btn-primary">Save & continue</button>
          </ModalFooter>
        </ModalContainer>
      </div>
    </form>
  );
};

export default ModalNewConnection;

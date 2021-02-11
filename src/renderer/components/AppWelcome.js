import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import * as actionTypes from "../store/actionType";

const AppWelcome = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const appSetting = useSelector((state) => state.appSetting);

  const toggleModal = () => {
    if (appSetting.showConnectionDialog)
      dispatch({ type: actionTypes.HIDE_CONNECTION_DIALOG });
    else dispatch({ type: actionTypes.SHOW_CONNECTION_DIALOG });
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

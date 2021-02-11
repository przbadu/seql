import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Icon } from "@mdi/react";
import { mdiCog, mdiPlus } from "@mdi/js";

import * as actionTypes from "../store/actionType";

import { useTranslation } from "react-i18next";
import WorkspaceMiniSidebarButtons from "./WorkspaceMiniSidebarButtons";
import { IconButton } from "./styles/IconButton";
import { SidebarWrapper } from "./styles/AppTheme";

const WorkspaceMiniSidebar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const appSetting = useSelector((state) => state.appSetting);
  const connections = useSelector((state) => state.connections);

  const toggleModal = () => {
    if (appSetting.showConnectionDialog)
      dispatch({ type: actionTypes.HIDE_CONNECTION_DIALOG });
    else dispatch({ type: actionTypes.SHOW_CONNECTION_DIALOG });
  };

  return (
    <SidebarWrapper className="pt-2">
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <IconButton
          className="tooltip tooltip-right text-error"
          data-tooltip={t("word.createConn")}
          onClick={toggleModal}
        >
          <Icon path={mdiPlus} size={1} />
        </IconButton>

        {connections.map((connection) => (
          <WorkspaceMiniSidebarButtons
            key={connection.uid}
            connection={connection}
          />
        ))}
      </div>

      <IconButton
        className="tooltip tooltip-right"
        data-tooltip={t("word.settings")}
        onClick={() => {}}
      >
        <Icon path={mdiCog} size={1} />
      </IconButton>
    </SidebarWrapper>
  );
};

export default WorkspaceMiniSidebar;

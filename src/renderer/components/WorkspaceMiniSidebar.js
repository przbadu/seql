import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Icon } from "@mdi/react";
import { mdiCog, mdiPlus, mdiPlusThick } from "@mdi/js";

import * as actionTypes from "../store/actionType";

import PostgresqlLogo from "./icons/PostgresqlLogo";

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-right: 1px solid ${(props) => props.theme.borderColor};
  padding: 10px;
  height: 100vh;
`;

const WorkspaceMiniSidebar = () => {
  const dispatch = useDispatch();
  const appSetting = useSelector((state) => state.appSetting);

  const toggleModal = () => {
    if (appSetting.showConnectionDialog)
      dispatch({ type: actionTypes.HIDE_CONNECTION_DIALOG });
    else dispatch({ type: actionTypes.SHOW_CONNECTION_DIALOG });
  };

  return (
    <SidebarWrapper>
      <div>
        <a className="text-error" onClick={toggleModal}>
          <Icon path={mdiPlus} size={1} />
        </a>
      </div>
      <Icon path={mdiCog} size={1} />
    </SidebarWrapper>
  );
};

export default WorkspaceMiniSidebar;

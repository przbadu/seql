import React from "react";
import styled from "styled-components";

import PostgresqlLogo from "./icons/PostgresqlLogo";
import SettingIcon from "./icons/SettingIcon";

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
  return (
    <SidebarWrapper>
      <div>
        <PostgresqlLogo />
      </div>
      <SettingIcon />
    </SidebarWrapper>
  );
};

export default WorkspaceMiniSidebar;

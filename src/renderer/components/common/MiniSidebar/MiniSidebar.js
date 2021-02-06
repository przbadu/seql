import React from "react";
import styled from "styled-components";
import PostgresqlLogo from "../../icons/PostgresqlLogo";
import SettingIcon from "../../icons/SettingIcon";

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-right: 2px solid #333;
  padding: 10px;
  height: 100vh;
`;

const MiniSidebar = () => (
  <SidebarWrapper>
    <div>
      <PostgresqlLogo />
    </div>
    <SettingIcon />
  </SidebarWrapper>
);

export default MiniSidebar;

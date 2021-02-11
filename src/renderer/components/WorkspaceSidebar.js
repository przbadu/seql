import React from "react";
import { useSelector } from "react-redux";
import { Icon } from "@mdi/react";
import { mdiDatabasePlus, mdiRefresh, mdiPowerPlugOff } from "@mdi/js";

import {
  SidebarContent,
  SidebarHeader,
  SidebarWrapper,
} from "./styles/AppTheme";
import WorkspaceSidebarDatabase from "./WorkspaceSidebarDatabase";

const WorkspaceSidebar = () => {
  const { activeConnection } = useSelector((state) => state.appSetting);

  return (
    <SidebarWrapper className="databases">
      <SidebarHeader>
        <h6 className="heading">{activeConnection.name}</h6>
        <div className="icon-wrapper">
          <a>
            <Icon path={mdiDatabasePlus} size={1} className="icon" />
          </a>
          <a>
            <Icon path={mdiRefresh} size={1} className="icon" />
          </a>
          <a>
            <Icon path={mdiPowerPlugOff} size={1} className="icon" />
          </a>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <WorkspaceSidebarDatabase />
        <WorkspaceSidebarDatabase />
        <WorkspaceSidebarDatabase />
      </SidebarContent>
    </SidebarWrapper>
  );
};

export default WorkspaceSidebar;

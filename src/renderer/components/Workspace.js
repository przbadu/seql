import React from "react";
import { WorkspaceWrapper } from "./styles/AppTheme";
import WorkspaceSidebar from "./WorkspaceSidebar";

const Workspace = () => {
  return (
    <WorkspaceWrapper>
      <WorkspaceSidebar />

      <p>content</p>
    </WorkspaceWrapper>
  );
};

export default Workspace;

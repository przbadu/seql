import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { connectAndGetStructure } from "../store/actions/workspaceAction";
import BaseToast from "./BaseToast";
import { WorkspaceWrapper } from "./styles/AppTheme";
import WorkspaceSidebar from "./WorkspaceSidebar";

const Workspace = () => {
  const dispatch = useDispatch();
  const [showError, setShowError] = useState(true);
  const { activeConnection } = useSelector((state) => state.appSetting);
  const workspace = useSelector((state) => state.workspace);

  useEffect(() => {
    dispatch(connectAndGetStructure(activeConnection));
    setShowError(true);
  }, [dispatch]);

  return (
    <WorkspaceWrapper>
      <WorkspaceSidebar />

      <div>
        {workspace.errors && (
          <BaseToast
            open={showError}
            variant="error"
            message={workspace.errors.message}
            onClick={() => setShowError(false)}
          />
        )}

        <p>content</p>
      </div>
    </WorkspaceWrapper>
  );
};

export default Workspace;

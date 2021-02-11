import React from "react";
import { Icon } from "@mdi/react";
import { mdiChevronRight, mdiDatabase } from "@mdi/js";

const WorkspaceSidebarDatabase = () => {
  return (
    <details className="accordion">
      <summary className="accordion-header">
        <Icon path={mdiChevronRight} className="icon mr-2" />
        <Icon path={mdiDatabase} className="icon" />
        information_schema
      </summary>
      <div className="accordion-body">
        <ul className="menu menu-nav">
          <li className="menu-item">
            <a>Item 1</a>
          </li>
          <li className="menu-item">
            <a>Item 1</a>
          </li>
        </ul>
      </div>
    </details>
  );
};

export default WorkspaceSidebarDatabase;

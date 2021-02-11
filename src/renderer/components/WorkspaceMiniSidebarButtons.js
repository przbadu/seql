import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import { Menu, Item, useContextMenu } from "react-contexify";
import { Icon } from "@mdi/react";
import { mdiTrashCan, mdiPencil } from "@mdi/js";

import "react-contexify/dist/ReactContexify.css";
import PostgresqlLogo from "./icons/PostgresqlLogo";
import MysqlLogo from "./icons/MysqlLogo";
import * as actionTypes from "../store/actionType";
import { IconButton } from "./styles/IconButton";

const WorkspaceMiniSidebarButtons = ({ connection }) => {
  const dispatch = useDispatch();
  const { show } = useContextMenu({ id: connection.uid });
  const { activeConnection } = useSelector((state) => state.appSetting);

  console.log(activeConnection.uid);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: actionTypes.ACTIVE_CONNECTION, payload: connection });
  };

  const handleEdit = (e) => {
    console.log("edit");
  };

  const handleDelete = (e) => {
    dispatch({ type: actionTypes.DELETE_CONNECTION, payload: connection.uid });
  };

  const displayMenu = (e) => show(e);

  return (
    <>
      <IconButton
        className={clsx(
          connection.name && "tooltip tooltip-right",
          activeConnection.uid === connection.uid && "active"
        )}
        data-tooltip={connection.client}
        key={connection.uid}
        onClick={handleClick}
        onContextMenu={displayMenu}
      >
        {connection.client === "mysql" || connection.client === "mariadb" ? (
          <MysqlLogo />
        ) : (
          <PostgresqlLogo />
        )}
      </IconButton>

      <Menu id={connection.uid}>
        <Item data-label="edit" onClick={handleEdit}>
          <Icon path={mdiPencil} />
          Edit
        </Item>
        <Item data-label="delete" onClick={handleDelete}>
          <Icon path={mdiTrashCan} />
          Delete
        </Item>
      </Menu>
    </>
  );
};

export default WorkspaceMiniSidebarButtons;

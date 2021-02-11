import React from "react";
import styled from "styled-components";
import { Menu, Item, useContextMenu } from "react-contexify";
import { Icon } from "@mdi/react";
import { mdiTrashCan, mdiPencil } from "@mdi/js";

import "react-contexify/dist/ReactContexify.css";
import PostgresqlLogo from "./icons/PostgresqlLogo";
import MysqlLogo from "./icons/MysqlLogo";
import * as actionTypes from "../store/actionType";
import { useDispatch } from "react-redux";

export const IconButton = styled.a`
  margin-bottom: 10px;
  padding: 10px 10px 5px 10px;

  &:hover,
  &:active,
  & > .active {
    border-radius: 10px;
    background-color: #efefef;
  }
`;

const WorkspaceMiniSidebarButtons = ({ connection }) => {
  const dispatch = useDispatch();
  const { show } = useContextMenu({ id: connection.uid });

  const handleClick = (e) => {
    e.preventDefault();
    console.log("click");
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
        className={connection.name && `dropdown tooltip tooltip-right`}
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

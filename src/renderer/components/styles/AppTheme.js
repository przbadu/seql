import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const WorkspaceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid ${(props) => props.theme.borderColor};
  padding-left: 10px;
  padding-right: 10px;
  height: 100vh;
  background-color: #f7f8f9;

  &.databases {
    justify-content: start;
    min-width: 220px;
    background-color: #f0f0f0;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  & > .heading {
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
  }

  & > .icon-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    & > a {
      cursor: pointer;
      & > .icon {
        color: #666;
        padding-left: 11px;
        font-size: 12px;
      }
      &:hover > .icon {
        color: #333;
      }
    }
  }
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;

  & > .accordion {
    margin-left: -5px;
    margin-right: -5px;
    & > .accordion-header {
      padding: 2px 5px;
      cursor: pointer;
      font-weight: bold;
      display: flex;
      align-items: center;

      & > .icon {
        width: 16px;
        height: 16px;
      }
      &:hover {
        background-color: #ffffff75;
      }
    }

    & > .accordion-body {
      & > .menu {
        margin-top: -10px;
        margin-left: 1em;
        & > .menu-item {
          margin-bottom: -10px;
          cursor: pointer;
        }
      }
    }
  }
`;

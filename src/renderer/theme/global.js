import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  .form-horizontal {
    padding: 0;
  }

  /* Table */
  .column-key {
    -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
    font-size: 0.7rem;
    line-height: 1.5;
    margin-right: 0.2rem;
  }
  .column-key.key-pri, .column-key.key-PRIMARY {
    color: goldenrod;
  }
  .column-key.key-uni, .column-key.key-UNIQUE {
    color: deepskyblue;
  }
  .column-key.key-mul, .column-key.key-INDEX {
    color: palegreen;
  }
  .column-key.key-FULLTEXT {
    color: mediumvioletred;
  }
  .table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    display: table;
    table-layout: fixed;
  }
  .table .tbody {
    display: table-row-group;
  }
  .table .tr {
    display: table-row;
  }
  .table.table-scroll {
    display: block;
    overflow-x: auto;
    padding-bottom: 0.75rem;
    white-space: nowrap;
  }
  .table .thead {
    display: table-header-group;
  }
  .table .td,
  .table .th {
    border-bottom: 1px solid #dfdfdf;
    padding: 5px 5px;
    display: table-cell;
  }
  .table .th {
    border-bottom-width: 1px;
  }
  .table .tbody .tr.selected, .table.table-striped .tbody .tr.selected {
    background: #333 !important;
  }
  .table .tbody .tr.active, .table.table-striped .tbody .tr.active {
    background: #fff;
  }
  .table.table-hover .tbody .tr:hover {
    background: #fff;
  }
  .table.table-striped .tbody .tr:nth-of-type(odd) {
    background: #1d1d1d;
  }

  /* Animation */
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .jump-down-enter-active {
    animation: jump-down-in 0.2s;
  }
  .jump-down-leave-active {
    animation: jump-down-in 0.2s reverse;
  }
  @keyframes jump-down-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  `;

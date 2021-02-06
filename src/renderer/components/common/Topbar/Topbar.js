import React from "react";
import styled from "styled-components";

import Logo from "../../icons/Logo";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #333;
`;

const IconWrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Topbar = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <IconWrapper>
        <p>i1</p>
        <p>i1</p>
        <p>i1</p>
      </IconWrapper>
    </HeaderWrapper>
  );
};

export default Topbar;

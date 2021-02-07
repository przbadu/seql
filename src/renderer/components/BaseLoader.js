import React from "react";
import styled from "styled-components";

const Empty = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  flex-direction: column;
  left: 0;
  justify-content: center;
  right: 0;
`;

const BaseLoader = () => {
  return (
    <Empty>
      <div className="loading loading-lg" />
    </Empty>
  );
};

export default BaseLoader;

import { Children } from "react";

import styled from "styled-components";

const borderColor = "#e1e4e8";

const Row = styled.div`
  border-bottom: 1px solid ${borderColor};
  border-left: 1px solid ${borderColor};
  border-right: 1px solid ${borderColor};
  display: flex;
  align-items: center;
  padding: 20px;
  width: 1005;
  &:first-child {
    border-top: 1px solid ${borderColor};
  }
`;

export default Row;

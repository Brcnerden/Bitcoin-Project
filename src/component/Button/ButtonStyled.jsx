import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Button = styled.button`
  height: 52px;
  width: 150px;
  margin: 10px;
  background-color: #ffffff;
  color: #3984f4;
  border-color: #3984f4;
  ${({ color }) =>
    color &&
    css`
      background-color: #3984f4;
      color: #ffffff;
      border-color: #468ef9;
    `}

  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  border-radius: 40px;
`;

export { Button };

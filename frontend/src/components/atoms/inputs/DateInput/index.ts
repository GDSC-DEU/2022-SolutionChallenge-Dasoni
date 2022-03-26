import styled from "styled-components";

export const DateInput = styled.input`
  position: relative;
  width: 100%;
  border: none;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  &:focus {
    outline: none;
  }

  &::-webkit-calendar-picker-indicator {
    opacity: 0;
    position: absolute;
    left: -28px;
    width: 100%;
  }
`;

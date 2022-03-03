import styled from "styled-components";

export const ToggleSwitchButtonWrap = styled.div`
  position: relative;
`;

export const ToggleBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 34px;
  height: 14px;
  border-radius: 7px;
  background: #c2c2c2;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    margin-top: -3px;
    width: 20px;
    height: 20px;
    background: #e9e9e9;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const ToogleBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 7px;
  width: 34px;
  height: 14px;

  &:checked + ${ToggleBoxLabel} {
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      margin-left: 17px;
      transition: 0.2s;
      background: #616161;
    }
  }
`;

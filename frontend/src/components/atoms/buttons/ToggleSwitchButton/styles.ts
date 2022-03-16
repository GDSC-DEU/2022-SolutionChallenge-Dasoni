import styled from "styled-components";

export const ToggleSwitchButtonWrap = styled.div`
  position: relative;
`;

export const ToggleBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 36px;
  height: 20px;
  background: #e6e6e6;
  border-radius: 32px;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    margin-top: 3px;
    margin-left: 3px;
    width: 14px;
    height: 14px;
    background: #ffffff;
    box-shadow: 0px 4px 5px -1px rgba(0, 0, 0, 0.1);
    transition: 0.2s;
  }
`;

export const ToogleBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 7px;
  width: 34px;
  height: 14px;
  margin: 0;

  &:checked + ${ToggleBoxLabel} {
    background: #fe6f5b;
    content: "";
    display: block;
    width: 36px;
    height: 20px;
    transition: 0.5s;

    &::after {
      margin-left: 19px;
    }
  }
`;

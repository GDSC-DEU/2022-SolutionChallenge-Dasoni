import styled from "styled-components";

export const CheckBoxWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  font-family: "Roboto";
  font-weight: 500;
  font-size: 14px;
  line-height: 143%;
  color: #9b9b9b;

  input {
    display: none;
  }

  input + label {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 2px solid ${(props) => props.theme.mainColor};
    cursor: pointer;
    position: relative;
    margin-right: 8px;
  }

  input:checked + label::after {
    content: "✓";
    font-size: 18px;
    width: 16px;
    height: 16px;
    text-align: center;
    position: absolute;
    left: -1px;
    top: -1px;
    color: white;
    background: ${(props) => props.theme.mainColor};
  }
`;

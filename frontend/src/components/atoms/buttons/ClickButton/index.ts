import { ButtonHTMLAttributes, MouseEventHandler } from "react";
import styled from "styled-components";

interface buttonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  clicked?: boolean;
}

export const ClickButton = styled.button<buttonProps>`
  width: 100%;
  padding: 16px 0;
  border: 1px solid #dadada;
  border-radius: 8px;
  text-align: center;
  background: none;

  font-family: "Roboto";
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #838383;
  cursor: pointer;

  ${(props) =>
    props.clicked && "background: #fe6f5b; font-weight: 700; color: white;"}

  &:hover {
    background: #fe6f5b;
    font-weight: 700;
    color: white;
  }
`;

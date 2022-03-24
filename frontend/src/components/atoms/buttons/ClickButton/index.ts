import { ButtonHTMLAttributes, MouseEventHandler } from "react";
import styled from "styled-components";

interface buttonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  kind: "solid" | "line";
  clicked?: boolean;
}

export const ClickButton = styled.button<buttonProps>`
  width: 100%;
  padding: 16px 0;
  border-radius: 8px;
  text-align: center;
  font-family: "Roboto";
  font-weight: 400;
  line-height: 112%;
  cursor: pointer;

  ${(props) =>
    props.kind === "line"
      ? "border: 1px solid #dadada; background: none; color: #838383;"
      : "background: #DADADA; color: #FFFFFF; font-weight: 700; border:none;"}

  ${(props) =>
    props.clicked &&
    props.kind === "line" &&
    "border: 1px solid #FE6F5B; color: #FE6F5B;"}

  &:hover {
    ${(props) =>
      props.kind === "line"
        ? "border: 1px solid #fe6f5b; color: #fe6f5b;"
        : "background: #FE6F5B;"}
  }
`;

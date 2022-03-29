import { BlockList } from "net";
import styled from "styled-components";

export const ToggleMenuButtonWrap = styled.div`
  position: relative;

  .menu-button {
    width: 24px;
    height: 24px;
  }
`;

export const Menu = styled.div<{ menuClicked: boolean }>`
  display: none;
  ${(props) => props.menuClicked && "display: block;"}
  position: absolute;
  z-index: 100;
  right: -14px;
  margin-top: 1px;

  background: #ffffff;

  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.48),
    0px 3px 5px -5px rgba(0, 0, 0, 0.1);

  border-radius: 4px;
  padding: 8px;

  ul {
    margin: 0;
    padding: 0;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;

    li {
      min-width: 80px;
      list-style: none;
      padding: 6px 8px;
      cursor: pointer;

      &:hover {
        background: #e6e6e6;
        border-radius: 4px;
        font-weight: 500;
      }
    }
  }
`;

import styled from "styled-components";

export const ToggleBoxWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  & > span {
    font-family: "Roboto";
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #838383;
  }

  & > img {
    width: 16px;
    height: 16px;
    margin-left: 4px;
  }
`;

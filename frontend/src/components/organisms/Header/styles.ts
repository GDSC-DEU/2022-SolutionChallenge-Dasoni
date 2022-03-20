import styled from "styled-components";

export const HeaderWrap = styled.header<{ position?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.position === "middle" ? "center" : "space-between"};
  align-items: center;
  padding: 16px;

  .logo > a > img {
    width: 98px;
  }
`;

export const ButtonBox = styled.div`
  img {
    width: 24px;
    height: 24px;
    margin-left: 12px;
    cursor: pointer;
  }
`;

import styled from "styled-components";

export const HeaderWrap = styled.header<{ position?: string }>`
  position: fixed;
  top: 0;
  width: calc(100% - 32px);
  z-index: 1;

  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.position === "middle" ? "center" : "space-between"};
  align-items: center;
  padding: 16px;
  background: #fff;

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

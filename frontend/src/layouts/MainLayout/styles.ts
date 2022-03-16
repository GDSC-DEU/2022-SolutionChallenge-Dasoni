import styled from "styled-components";

export const ButtonBox = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  .search {
    width: 24px;
    height: 24px;
    background: gray;
  }

  .hamberger-menu {
    width: 24px;
    height: 24px;
    background: gray;
    margin-left: 12px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  font-family: Pretendard;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.2px;

  border-bottom: 0.5px solid #dadada;

  & > a {
    flex-grow: 1;
    text-align: center;
  }

  .nav-item {
    padding: 12px 0px;
  }
  .current {
    font-weight: bold;
    border-bottom: 2px solid #fe6f5b;
  }
`;

export const Main = styled.main`
  padding: 16px;
`;

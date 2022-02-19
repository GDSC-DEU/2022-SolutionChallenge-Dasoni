import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 12px 16px;
  border-bottom: 0.48px solid #c2c2c2;
`;

export const ButtonBox = styled.div`
  width: 25vw;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;

  padding: 0 16px;
  background: #f7f7f7;

  .nav-item {
    padding: 12px 10px;
  }
  .stayed {
    font-weight: bold;
    border-bottom: 2px solid #838383;
  }
`;

export const Main = styled.main`
  padding: 16px;
`;

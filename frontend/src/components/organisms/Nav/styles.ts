import styled from "styled-components";

export const NavWrap = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 6px 16px;

  font-family: "Roboto";
  font-weight: 400;
  line-height: 20px;
  color: #1f1f1f;

  .nav-item {
    padding: 6px 8px;
    margin-right: 16px;
  }
  .current {
    font-weight: 700;
    color: #fe6f5b;
  }
`;

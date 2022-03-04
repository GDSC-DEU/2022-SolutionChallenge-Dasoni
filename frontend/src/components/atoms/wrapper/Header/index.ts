import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 12px 16px;
  border-bottom: 0.48px solid #c2c2c2;

  .logo {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    margin-top: 4px;
  }
`;

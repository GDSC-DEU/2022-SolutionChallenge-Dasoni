import styled from "styled-components";

export const LoginSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #fe6f5b;
`;
export const Logo = styled.article`
  margin-top: 218px;
  width: 125px;
  height: 119px;
  background: #fff;
`;

export const LoginList = styled.article`
  margin-top: 74px;
`;
export const GoogleLoginButton = styled.button`
  background: #ffffff;
  border: 1px solid #9b9b9b;
  border-radius: 8px;
  padding: 14px 20px;
  min-width: 330px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;

  img {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 20px;
  }

  span {
    font-family: "Pretendard";
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    text-align: center;
  }
`;

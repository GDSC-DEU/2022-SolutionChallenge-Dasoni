import styled from "styled-components";

export const SignupSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 125px 16px 0;

  .introduce {
    font-family: "Nunito";
    font-weight: 700;
    line-height: 140%;
    color: #fe6f5b;
    margin-bottom: 32px;
  }

  & > button {
    margin-bottom: 20px;
    max-width: 330px;
  }
`;

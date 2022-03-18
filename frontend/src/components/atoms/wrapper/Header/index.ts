import styled from "styled-components";

export const Header = styled.header<{ position?: string }>`
  display: flex;
  flex-direction: row;

  justify-content: ${(props) =>
    props.position === "middle" ? "center" : "space-between"};
  align-items: center;

  padding: 12px 16px;
  border-bottom: 0.48px solid #c2c2c2;

  .logo > a > img {
    width: 98px;
  }

  .back-button {
    width: 24px;
    height: 24px;
    background: gray;
  }

  .title {
    text-align: center;
    width: 100%;
    margin-left: -24px;

    font-family: Pretendard;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.2px;
  }
`;

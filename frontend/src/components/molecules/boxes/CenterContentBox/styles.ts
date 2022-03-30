import styled from "styled-components";

export const CenterContentBoxWrap = styled.article`
  padding: 12px 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
  border-bottom: solid 4px #e6e6e6;

  .content {
    flex: 1;
    margin-right: 40px;

    .content-title {
      margin-bottom: 2px;
    }
    .content-address,
    .content-phone-number,
    .content-homepage-url {
      font-size: 14px;
      line-height: 143%;
      color: #9b9b9b;
      margin-bottom: 2px;
    }
    .content-homepage-url {
      text-decoration: underline;
    }
  }

  img {
    width: 20px;
    height: 20px;
    padding: 10px;
    border: 1.25px solid #dadada;
    border-radius: 50%;
    cursor: pointer;
  }
`;

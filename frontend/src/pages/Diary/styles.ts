import { LinkHTMLAttributes } from "react";
import styled from "styled-components";

export const QuoteArticle = styled.article`
  margin-bottom: 16px;
  font-family: Montserrat;

  .date {
    font-weight: bold;
    font-size: 14px;
    line-height: 137%;
    color: #1f1f1f;

    margin-bottom: 3px;
  }
`;

export const Quote = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Nunito";
  font-weight: 400;
  color: #1f1f1f;

  .quote {
    line-height: 140%;
  }
  .author {
    font-size: 12px;
    line-height: 160%;
    align-self: flex-end;
  }
  .author::before {
    content: "- ";
  }
`;

export const WeeklyMoodArticle = styled.article`
  margin-bottom: 13px;
  display: flex;
  flex-direction: column;
  font-family: Montserrat;

  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    color: #1f1f1f;
    font-family: "Roboto";
    font-weight: 700;
    line-height: 19px;

    margin-bottom: 8px;

    & > img {
      width: 24px;
      height: 24px;
      background: gray;
    }
  }

  & > a > div {
    background: linear-gradient(0deg, #bce0fb, #bce0fb), #ffffff;
    padding: 12px 20px;
  }

  .date {
    font-weight: bold;
    font-size: 14px;
    line-height: 137%;
  }
  .emotion-icon {
    width: 67px;
    height: 67px;
    background: gray;
    margin: 5px 0;
  }
  .suggestion {
    font-size: 14px;
    line-height: 150%;
  }
`;

export const Notification = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 10px;

  span {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    margin-right: 4px;
  }
`;

export const DiaryArticle = styled.article``;

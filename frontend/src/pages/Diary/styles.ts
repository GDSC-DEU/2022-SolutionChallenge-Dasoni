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

  .quote {
    font-size: 16px;
    line-height: 140%;
    color: #1f1f1f;
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
    font-weight: bold;
    font-size: 16px;
    line-height: 120%;
    color: #1f1f1f;
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
    font-family: Montserrat;
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    margin-right: 12px;
  }
`;

export const DiaryArticle = styled.article``;

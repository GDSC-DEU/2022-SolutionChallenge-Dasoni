import styled from "styled-components";

export const DiaryWrap = styled.div`
  margin-top: 100px;
  padding: 16px;
`;

export const QuoteArticle = styled.article`
  font-family: Montserrat;
`;

export const Quote = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Nunito";
  font-weight: 400;
  color: #1f1f1f;

  .date {
    font-family: "Roboto";
    font-weight: 700;
    line-height: 125%;
    color: #1f1f1f;
    margin-bottom: 8px;
  }

  .quote {
    line-height: 140%;
  }
  .author {
    font-family: "Nunito";
    font-weight: 700;
    font-size: 14px;
    line-height: 143%;
    align-self: flex-end;
  }
  .author::before {
    content: "- ";
  }
`;

export const RecentMoodLink = styled.article`
  margin: 22px 0 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  color: #1f1f1f;
  font-family: "Roboto";
  font-weight: 600;
  line-height: 19px;

  & > a > img {
    width: 24px;
    height: 24px;
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
    line-height: 143%;
    margin-right: 4px;
  }
`;

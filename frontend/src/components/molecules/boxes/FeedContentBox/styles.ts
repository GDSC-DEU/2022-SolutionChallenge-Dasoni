import styled from "styled-components";

export const FeedContentBoxWrap = styled.article`
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.48), 0px 0px 4px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  margin-bottom: 16px;
  padding: 12px;
  font-family: "Roboto";

  .feed-content-title {
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;
    align-items: center;

    span {
      flex: 1;
      margin-left: 8px;
      font-weight: 700;
      font-size: 16px;
      line-height: 125%;
    }

    .emotion {
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
    .delete {
      width: 24px;
      height: 24px;
    }
  }

  .feed-content-content {
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    margin-bottom: 12px;
  }
  .feed-content-information {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .feedback {
      display: flex;
      flex-direction: row;
      align-items: center;

      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: #838383;

      img {
        width: 16px;
        height: 16px;
        margin-right: 4px;
      }
      span {
        margin-right: 8px;
      }
    }
    .writer {
      display: flex;
      flex-direction: row;
      align-items: center;

      font-weight: 700;
      font-size: 12px;
      line-height: 14px;

      img {
        width: 20px;
        height: 20px;
        margin-right: 8px;
      }
    }
  }
`;

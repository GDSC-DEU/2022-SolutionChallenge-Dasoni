import styled from "styled-components";

export const SuppportContentBoxWrap = styled.article`
  padding: 12px 16px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.48), 0px 0px 4px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  position: relative;
  margin-bottom: 16px;

  .bookmark {
    position: absolute;
    right: 12px;
    top: 12px;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Summary = styled.summary`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-family: "Roboto";
  color: #1f1f1f;

  .thumbnail {
    width: 60px;
    height: 60px;
    background: #ffeae8;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;

    img {
      width: 36px;
      height: 36px;
    }
  }
  .content {
    flex: 1;
    margin-right: 32px;

    .title {
      font-weight: 700;
      line-height: 125%;
      margin-bottom: 4px;
    }
    .date {
      font-size: 14px;
      line-height: 143%;
      margin-bottom: 8px;
    }
    .tags {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      .tag {
        padding: 4px 8px;
        background: #ffa093;
        border-radius: 12px;
        margin-right: 4px;

        font-size: 12px;
        line-height: 14px;
        color: #ffffff;
      }
    }
  }
`;

export const Details = styled.div`
  margin-top: 20px;
  position: relative;

  .chevron {
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 24px;
  }

  p {
    margin-bottom: 20px;

    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 8px;

      & > img {
        width: 16px;
        height: 16px;
        margin-right: 4px;
      }
      & > span {
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: #838383;
      }
    }
    .content {
      padding: 0 4px;
      font-size: 14px;
      line-height: 143%;
    }
  }
  button {
    width: 100%;
    background: ${(props) => props.theme.mainColor};
    border-radius: 8px;
    border: none;
    padding: 12px 0;
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;
  }
`;

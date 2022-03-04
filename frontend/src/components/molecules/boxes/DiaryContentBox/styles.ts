import styled from "styled-components";

export const DiaryContentBoxWrap = styled.div`
  position: relative;
  background-color: #f7f7f7;
  border-radius: 10px;
  filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.48))
    drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.12));
  padding: 14px 20px;

  display: grid;
  grid-template-columns: 60px 1fr 24px;
  grid-gap: 10px;
  margin-bottom: 12px;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin-left: -10px; */

    .warning-signer {
      position: absolute;
      top: 0;
      left: 0;
      width: 8px;
      height: 100%;
      background: #c2c2c2;
      border-radius: 8px 0px 0px 8px;
    }

    .mood-icon {
      width: 44px;
      height: 44px;
      background: gray;
      border-radius: 50%;
      margin-bottom: 7px;
    }
    .date {
      padding: 2px 6px 0;
      border-radius: 5px;
      font-family: SF Pro;
      font-weight: bold;
      font-size: 11px;
      line-height: 167%;
      background: #dadada;
    }
  }

  .center {
    border-left: 1px solid #9b9b9b;
    padding: 7px 0 7px 12px;

    .title {
      font-family: Pretendard;
      font-weight: 600;
      font-size: 16px;
      line-height: 120%;
      margin-bottom: 2px;
    }
    .content {
      font-family: Pretendard;
      font-size: 14px;
      line-height: 140%;
      letter-spacing: -0.2px;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .menu-button {
      width: 24px;
      height: 24px;
      background: gray;
    }
    .warning-button {
      width: 24px;
      height: 24px;
      background: gray;
    }
  }
`;

import styled from "styled-components";

export const DiaryContentBoxWrap = styled.div`
  position: relative;
  background-color: #fff;
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
      background: #fe6f5b;
      border-radius: 8px 0px 0px 8px;
    }

    .mood-icon {
      width: 48px;
      height: 48px;
      margin-bottom: 7px;
    }
    .date {
      padding: 4px 6px;
      border-radius: 5px;
      font-family: "Roboto";
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      background: #ffbf41;

      display: flex;
      align-items: center;
      text-align: center;
      color: #ffffff;
    }
  }

  .center {
    border-left: 0.5px solid #9b9b9b;
    padding: 7px 0 7px 12px;
    font-family: "Roboto";

    .title {
      font-weight: 600;
      line-height: 120%;
      margin-bottom: 4px;
    }
    .content {
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    .menu-button {
      width: 24px;
      height: 24px;
    }
    .warning-button {
      width: 20px;
      height: 20px;
    }
  }
`;

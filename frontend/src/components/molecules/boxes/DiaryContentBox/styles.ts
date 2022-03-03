import styled from "styled-components";

export const DiaryContentBoxWrap = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  padding: 2px 0;

  .mood-icon {
    width: 44px;
    height: 44px;
    background: gray;
    border-radius: 50%;
  }
  .date {
    padding: 0 6px;
    font-family: SF Pro;
    font-weight: bold;
    font-size: 11px;
    line-height: 167%;
    background: #dadada;
  }
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
`;

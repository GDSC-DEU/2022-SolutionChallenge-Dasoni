import styled from "styled-components";

export const WeeklyMoodWrap = styled.article<{ emotion: string }>`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  font-family: "Roboto";

  & > a > div {
    background: ${(props) => props.theme.moodColor[props.emotion][30]};
    padding: 12px 34px;
  }

  .date {
    font-weight: 600;
    line-height: 19px;
  }
  .emotion-icon > img {
    width: 72px;
    height: 72px;
    margin: 6px 0;
  }
  .suggestion {
    margin-top: 1px;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
  }
`;

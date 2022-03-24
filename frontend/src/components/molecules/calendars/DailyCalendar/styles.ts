import styled from "styled-components";

export const DailyCalendarWrap = styled.div<{ backgroundColor: string }>`
  display: flex;
  flex-direaction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 0;

  .month {
    margin: 0 16px;
    font-family: "Roboto";
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
  }
  .month,
  .chevron {
    cursor: pointer;
  }
  .chevron > img {
    width: 24px;
    height: 24px;
  }
`;

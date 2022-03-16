import styled from "styled-components";

export const DailyCalendarWrap = styled.div<{ backgroundColor: string }>`
  background: ${(props) => props.backgroundColor};
  display: flex;
  flex-direaction: row;
  justify-content: center;

  font-family: "Roboto";
  font-weight: 700;
  line-height: 19px;

  padding: 11px 0;

  .month {
    margin: 0 17px;
  }
  .month,
  .arrows {
    cursor: pointer;
  }
`;

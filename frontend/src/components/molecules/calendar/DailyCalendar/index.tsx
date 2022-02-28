import * as React from "react";
import { DailyCalendarWrap } from "./styles";

function DailyCalendar(props: {
  backgroundColor?: string;
  children: React.ReactNode;
}) {
  return (
    <DailyCalendarWrap backgroundColor={props?.backgroundColor || "#fff"}>
      <span className="back">뒤로</span>
      <span className="date">{props.children}</span>
      <span className="front">앞으로</span>
    </DailyCalendarWrap>
  );
}

export default DailyCalendar;

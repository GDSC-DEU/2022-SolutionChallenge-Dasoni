import * as React from "react";
import { DailyCalendarWrap } from "./styles";

function DailyCalendar(props: {
  backgroundColor?: string;
  children: React.ReactNode;
}) {
  return (
    <DailyCalendarWrap backgroundColor={props?.backgroundColor || "#fff"}>
      <span className="arrows prev-month">&lt;</span>
      <span className="month">{props.children}</span>
      <span className="arrows next-month">&gt;</span>
    </DailyCalendarWrap>
  );
}

export default DailyCalendar;

import * as React from "react";
import { DailyCalendarWrap } from "./styles";

import chevron_left from "assets/icons/chevron-left.png";
import chevron_right from "assets/icons/chevron-right.png";

function DailyCalendar(props: {
  backgroundColor?: string;
  children: React.ReactNode;
}) {
  return (
    <DailyCalendarWrap backgroundColor={props?.backgroundColor || "#fff"}>
      <span className="chevron prev-month">
        <img src={chevron_left} />
      </span>
      <span className="month">{props.children}</span>
      <span className="chevron next-month">
        <img src={chevron_right} />
      </span>
    </DailyCalendarWrap>
  );
}

export default DailyCalendar;

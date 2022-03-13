import * as React from "react";

import DailyCalendar from "components/molecules/calendars/DailyCalendar";
import DiaryPostForm from "components/molecules/forms/DiaryPostFrom";

function DiaryPost() {
  return (
    <>
      <DailyCalendar backgroundColor="#F7F7F7">Thursday, Feb 24</DailyCalendar>
      <DiaryPostForm />
    </>
  );
}

export default DiaryPost;

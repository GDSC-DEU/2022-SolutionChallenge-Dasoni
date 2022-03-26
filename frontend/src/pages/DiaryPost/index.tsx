import * as React from "react";

import DailyCalendar from "components/molecules/calendars/DailyCalendar";
import DiaryPostForm from "components/molecules/forms/DiaryPostFrom";
import BackNav from "components/organisms/navbars/BackNav";

function DiaryPost() {
  return (
    <>
      <BackNav type="title">Write</BackNav>
      <DiaryPostForm />
    </>
  );
}

export default DiaryPost;

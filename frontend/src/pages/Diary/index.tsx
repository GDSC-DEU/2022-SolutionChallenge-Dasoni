import axios from "axios";
import * as React from "react";
import { useCallback, useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import useSWR from "swr";
import { Link } from "react-router-dom";

import { DASONI_BACKEND_API } from "secret";
import { diariesAtom, DiaryTypes } from "recoil/Diary";
import { authAtom } from "recoil/Auth";
import { userAtom } from "recoil/User";
import useDiaryActions from "hooks/useDiaryActions";

import DailyCalendar from "components/molecules/calendars/DailyCalendar";
import DiaryContentBox from "components/molecules/boxes/DiaryContentBox";
import ToggleSwitchButton from "components/atoms/buttons/ToggleSwitchButton";
import ShadowBox from "components/molecules/boxes/ShadowBox";
import WriteButton from "components/atoms/buttons/WriteButton";

import {
  DiaryArticle,
  QuoteArticle,
  Quote,
  WeeklyMoodArticle,
  Notification,
} from "./styles";

function Diary() {
  const [diaries, setDiaries] = useRecoilState<DiaryTypes[]>(diariesAtom);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [day, setDay] = useState(new Date().getDate());
  const diaryActions = useDiaryActions();

  useSWR(`${DASONI_BACKEND_API}/diaries`, (url) =>
    diaryActions.getDiaries(url, { year, month })
  );

  return (
    <>
      <QuoteArticle>
        <ShadowBox>
          <div className="date">
            {day} {month}, {year}
          </div>
          <Quote>
            <div className="quote">
              Whether you think you can or you think you can't, you're right.
            </div>
            <div className="author">Anne Frank</div>
          </Quote>
        </ShadowBox>
      </QuoteArticle>
      <WeeklyMoodArticle>
        <div className="title">
          <span>Your recent mood</span>
          <img />
        </div>
        <Link to="/weekly">
          <ShadowBox align="center">
            <div className="date">
              {month}.{day - 7} - {month}.{day}
            </div>
            <div className="emotion-icon"></div>
            <div className="suggestion">
              You seem to have felt sad these days. Why don’t you share yout
              story?
            </div>
          </ShadowBox>
        </Link>
      </WeeklyMoodArticle>
      <DiaryArticle>
        <DailyCalendar>Jan 2022</DailyCalendar>
        <Notification>
          <span>Notification</span>
          <ToggleSwitchButton />
        </Notification>
        <section>
          {diaries &&
            diaries.map((diary) => (
              <DiaryContentBox
                key={diary.diaryId}
                created_date={diary.date}
                title={diary.title}
                content={diary.content}
              />
            ))}
        </section>
      </DiaryArticle>
      <WriteButton />
    </>
  );
}

export default Diary;

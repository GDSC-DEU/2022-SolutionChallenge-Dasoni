import axios from "axios";
import * as React from "react";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import useSWR from "swr";

import { DASONI_BACKEND_API } from "../../secret";
import ShadowBox from "../../components/molecules/boxes/ShadowBox";
import WriteButton from "../../components/atoms/buttons/WriteButton";
import { diariesState } from "../../recoil/Diary";

import {
  DiaryArticle,
  QuoteArticle,
  Quote,
  WeeklyMoodArticle,
  Notification,
} from "./styles";

import type { DiaryTypes } from "recoil/Diary";
import DailyCalendar from "../../components/molecules/calendars/DailyCalendar";
import DiaryContentBox from "../../components/molecules/boxes/DiaryContentBox";
import ToggleSwitchButton from "../../components/atoms/buttons/ToggleSwitchButton";

interface Config {
  resources: {
    content: DiaryTypes[];
  };
}

function Diary() {
  const [diaries, setDiaries] = useRecoilState<DiaryTypes[]>(diariesState);

  const fetcher = useCallback(
    async (url: string) => {
      console.log("실행?");
      const response = await axios.get<Config>(url);
      console.log("data: ", response.data);
      setDiaries(response.data.resources.content);

      return response.data.resources.content;
    },
    [setDiaries]
  );
  useSWR(`${DASONI_BACKEND_API}/api/diaries`, fetcher);

  return (
    <>
      <QuoteArticle>
        <ShadowBox>
          <div className="date">13 Feb, 2022</div>
          <Quote>
            <div className="quote">
              Whoever is happy will make others happy too.
            </div>
            <div className="author">Anne Frank</div>
          </Quote>
        </ShadowBox>
      </QuoteArticle>
      <WeeklyMoodArticle>
        <ShadowBox align="center">
          <div className="title">Weekly Mood</div>
          <div className="date">2.07 - 2.13</div>
          <div className="emotion-icon"></div>
          <div className="suggestion">
            You seem to have felt sad these days. Why don’t you share yout
            story?
          </div>
        </ShadowBox>
      </WeeklyMoodArticle>
      <DiaryArticle>
        <DailyCalendar>Jan 2022</DailyCalendar>
        <Notification>
          <span>Show notification</span>
          <ToggleSwitchButton />
        </Notification>
        <section>
          {diaries &&
            diaries.map((diary) => (
              <DiaryContentBox
                key={diary.diary_id}
                created_date={diary.created_date}
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

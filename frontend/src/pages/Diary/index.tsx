import axios from "axios";
import * as React from "react";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import useSWR from "swr";

import { baseURL } from "../../api";
import MainBox from "../../components/atoms/boxes/MainBox";
import WriteButton from "../../components/atoms/buttons/WriteButton";
import { diariesState } from "../../recoil/Diary";

import { DiaryArticle, QuoteArticle, WeeklyMoodArticle } from "./styles";

import type { DiaryTypes } from "recoil/Diary";

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
      setDiaries(response.data.resources.content);

      return response.data.resources.content;
    },
    [setDiaries]
  );
  useSWR(`${baseURL}/api/diaries`, fetcher);

  return (
    <>
      <QuoteArticle>
        <MainBox>
          <div>13 Fe, 2022</div>
          <div>Whoever is happy will make others happy too.</div>
        </MainBox>
      </QuoteArticle>
      <WeeklyMoodArticle>
        <MainBox>
          <div>Weekly Mood</div>
          <div>2.07 - 2.13</div>
          <div>Mood Icon</div>
          <div>
            You seem to have felt sad these days. Why don’t you share yout
            story?
          </div>
        </MainBox>
      </WeeklyMoodArticle>
      <DiaryArticle>
        <div>
          <span>February</span>
          <span>toggle</span>
        </div>
        <section>
          {diaries &&
            diaries.map((diary) => (
              <MainBox key={diary.diary_id}>
                <div>
                  <div>Mood Icon</div>
                  <div>{diary.created_date}</div>
                </div>
                <div>
                  <div>{diary.title}</div>
                  <div>{diary.content}</div>
                </div>
              </MainBox>
            ))}
        </section>
      </DiaryArticle>
      <WriteButton />
    </>
  );
}

export default Diary;

import axios from "axios";
import * as React from "react";
import useSWR from "swr";

import { baseURL } from "../../api";
import MainBox from "../../components/atoms/boxes/MainBox";
import WriteButton from "../../components/atoms/buttons/WriteButton";

import { DiaryArticle, QuoteArticle, WeeklyMoodArticle } from "./styles";

interface DiaryContent {
  diary_id: string;
  title: string;
  emotion: string;
  content: string;
  created_date: string;
  updated_date: string;
}

interface Config {
  resources: {
    content: DiaryContent[];
  };
}

function Diary() {
  const fetcher = async (url: string) => {
    const response = await axios.get<Config>(url);
    return response.data.resources.content;
  };

  const { data } = useSWR(`${baseURL}/api/diaries`, fetcher);

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
          {data &&
            data.map((content) => (
              <MainBox key={content.diary_id}>
                <div>
                  <div>Mood Icon</div>
                  <div>{content.created_date}</div>
                </div>
                <div>
                  <div>{content.title}</div>
                  <div>{content.content}</div>
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

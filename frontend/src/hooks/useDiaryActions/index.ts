import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { authAtom } from "recoil/Auth";
import {
  diariesAtom,
  weeklyDiariesAtom,
  weeklyEmotionAverageAtom,
} from "recoil/Diary";
import { DASONI_BACKEND_API } from "secret";

export interface DiaryPost {
  content: string;
  date: string;
  emotion: string;
  feed: boolean;
  title: string;
}

function useDiaryActions() {
  const setDiaries = useSetRecoilState(diariesAtom);
  const setWeeklyDiaries = useSetRecoilState(weeklyDiariesAtom);
  const setWeeklyEmotionAverage = useSetRecoilState(weeklyEmotionAverageAtom);
  const auth = useRecoilValue(authAtom);
  let navigate = useNavigate();

  async function getDiaries(
    url: string,
    { year, month }: { year: number; month: number }
  ) {
    let config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
        "Content-Type": "application/json",
      },
      params: {
        year,
        month,
      },
    };

    await axios
      .get(url, config)
      .then((res) => {
        setWeeklyEmotionAverage(res.data.emotionAverage);
        setDiaries(res.data.diaries);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  async function getWeeklyDiaries() {
    let config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
        "Content-Type": "application/json",
      },
    };

    await axios
      .get(`${DASONI_BACKEND_API}/diaries/week`, config)
      .then((res) => {
        setWeeklyDiaries(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  async function postDiary(props: DiaryPost) {
    const { content, date, emotion, feed, title } = props;

    interface DiaryPostResponse {
      content: {
        content: string;
        contentEmotion: string;
        date: string;
        diaryId: string;
        emotion: string;
        title: string;
      };
      link: string;
    }

    await axios
      .post<DiaryPostResponse>(
        `${DASONI_BACKEND_API}/diaries`,
        {
          content,
          date,
          emotion,
          feed,
          title,
        },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setDiaries((diaries) => [...diaries, res.data.content]);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function deleteDiary(diaryId: string) {
    let config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
        "Content-Type": "application/json",
      },
      params: {
        diaryId,
      },
    };

    await axios
      .get(`${DASONI_BACKEND_API}/diaries/${diaryId}`, config)
      .then((res) => {
        setDiaries((diaries) =>
          diaries.filter((diary) => diary.diaryId !== diaryId)
        );
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return {
    getDiaries,
    getWeeklyDiaries,
    postDiary,
    deleteDiary,
  };
}

export default useDiaryActions;

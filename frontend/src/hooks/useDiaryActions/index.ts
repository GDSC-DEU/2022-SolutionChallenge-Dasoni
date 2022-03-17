import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { authAtom } from "recoil/Auth";
import { diariesAtom } from "recoil/Diary";
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
        setDiaries(res.data.diaries);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  async function postDiary(props: DiaryPost) {
    const { content, date, emotion, feed, title } = props;

    console.log({
      content: content,
      date: date,
      emotion: emotion,
      feed: feed,
      title: title,
    });

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

  return {
    getDiaries,
    postDiary,
  };
}

export default useDiaryActions;

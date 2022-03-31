import * as React from "react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

import CalloutBox from "components/molecules/boxes/CalloutBox";
import DiaryContentBox from "components/molecules/boxes/DiaryContentBox";
import { DiaryTypes, weeklyDiariesAtom } from "recoil/Diary";

import { Main } from "./styles";
import useDiaryActions from "hooks/useDiaryActions";
import BackNav from "components/organisms/navbars/BackNav";

function DiaryWeeklyList() {
  const [diaries, setDiaries] = useRecoilState<DiaryTypes[]>(weeklyDiariesAtom);
  const diaryActions = useDiaryActions();

  useEffect(() => {
    diaryActions.getWeeklyDiaries();
  }, []);

  return (
    <>
      <BackNav type="title">Your recent mood</BackNav>
      <Main>
        <CalloutBox>
          These were analyzed using our model, based on what you’ve written
          during last 7 days. We show you in order of the most related diaries.
        </CalloutBox>
        {diaries &&
          diaries.map((diary) => (
            <DiaryContentBox
              key={diary.diaryId}
              id={diary.diaryId}
              created_date={diary.date}
              title={diary.title}
              content={diary.content}
              emotion={diary.emotion}
            />
          ))}
      </Main>
    </>
  );
}

export default DiaryWeeklyList;

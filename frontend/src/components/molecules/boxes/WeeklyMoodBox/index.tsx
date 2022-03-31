import useDiaryActions from "hooks/useDiaryActions";
import * as React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { EmotionAverage, weeklyEmotionAverageAtom } from "recoil/Diary";
import ShadowBox from "../ShadowBox";
import {
  Emotion,
  emotionImages,
} from "components/molecules/boxes/DiaryContentBox";

import { WeeklyMoodWrap } from "./styles";

function WeeklyMoodBox() {
  const [weeklyEmotionAverage, setWeeklyEmotionAverage] =
    useRecoilState<EmotionAverage>(weeklyEmotionAverageAtom);
  const diaryActions = useDiaryActions();

  return (
    <WeeklyMoodWrap emotion={weeklyEmotionAverage.emotion.toLowerCase()}>
      <Link to="/weekly">
        <ShadowBox align="center">
          <div className="date">
            {weeklyEmotionAverage.startedDate.split("-")[1]}.
            {weeklyEmotionAverage.startedDate.split("-")[2]}
            {" - "}
            {weeklyEmotionAverage.endedDate.split("-")[1]}.
            {weeklyEmotionAverage.endedDate.split("-")[2]}
          </div>
          <div className="emotion-icon">
            <img
              src={
                emotionImages[
                  weeklyEmotionAverage.emotion.toLowerCase() as Emotion
                ]
              }
            />
          </div>
          <div className="suggestion">
            {weeklyEmotionAverage.emotion.toLowerCase() === "verysad" && (
              <div>
                Mommy, you look <b>Very Sad</b> recently.Why don’t you share
                yours stories?
              </div>
            )}
            {weeklyEmotionAverage.emotion.toLowerCase() === "sad" && (
              <div>
                Mommy, you look <b>Sad</b> recently. Why don’t you share your
                stories?
              </div>
            )}
            {weeklyEmotionAverage.emotion.toLowerCase() === "normal" && (
              <div>
                Mommy, you look <b>Normal</b> recently.
              </div>
            )}
            {weeklyEmotionAverage.emotion.toLowerCase() === "happy" && (
              <div>
                Mommy, you look <b>Happy</b> recently.
              </div>
            )}
            {weeklyEmotionAverage.emotion.toLowerCase() === "veryhappy" && (
              <div>
                Mommy, you look <b>Very Happy</b> recently.
              </div>
            )}
          </div>
        </ShadowBox>
      </Link>
    </WeeklyMoodWrap>
  );
}

export default WeeklyMoodBox;

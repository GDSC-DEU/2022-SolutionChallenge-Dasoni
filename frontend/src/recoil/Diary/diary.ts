import { atom } from "recoil";

import type { DiaryTypes, EmotionAverage } from "./types";

export const diariesAtom = atom<DiaryTypes[]>({
  key: "diaries",
  default: [],
});

export const weeklyDiariesAtom = atom<DiaryTypes[]>({
  key: "weeklyDiaries",
  default: [],
});

export const weeklyEmotionAverageAtom = atom<EmotionAverage>({
  key: "weeklyEmotionAverage",
  default: {
    emotion: "Happy",
    endedDate: "2022-03-26",
    startedDate: "2022-04-01",
  },
});

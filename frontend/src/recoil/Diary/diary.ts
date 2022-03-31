import { atom } from "recoil";

import type { DiaryTypes } from "./types";

export const diariesAtom = atom<DiaryTypes[]>({
  key: "diaries",
  default: [],
});

export const weeklyDiariesAtom = atom<DiaryTypes[]>({
  key: "weeklyDiaries",
  default: [],
});

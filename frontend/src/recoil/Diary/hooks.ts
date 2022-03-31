import { selector } from "recoil";

import { diariesAtom, weeklyDiariesAtom } from "./diary";

export const getDiaries = selector({
  key: "getDiaries",
  get: ({ get }) => {
    const diaries = get(diariesAtom);
    return diaries;
  },
});

export const getWeeklyDiaries = selector({
  key: "getWeeklyDiaries",
  get: ({ get }) => {
    const diaries = get(weeklyDiariesAtom);
    return diaries;
  },
});

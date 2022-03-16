import { selector } from "recoil";

import { diariesAtom } from "./diary";

export const getDiaries = selector({
  key: "getDiaries",
  get: ({ get }) => {
    const diaries = get(diariesAtom);
    return diaries;
  },
});

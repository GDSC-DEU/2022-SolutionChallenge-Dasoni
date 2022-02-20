import { selector } from "recoil";

import { diariesState } from "./diary";

export const getDiariesState = selector({
  key: "getDiariesState",
  get: ({ get }) => {
    const diaries = get(diariesState);
    return diaries;
  },
});

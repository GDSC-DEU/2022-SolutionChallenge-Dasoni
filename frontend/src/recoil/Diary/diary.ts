import { atom } from "recoil";

import type { DiaryTypes } from "./types";

export const diariesState = atom<DiaryTypes[]>({
  key: "diariesState",
  default: [],
});

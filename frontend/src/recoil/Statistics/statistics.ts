import { atom } from "recoil";
import type { StatisticsTypes } from "./types";

export const statisticsAtom = atom<StatisticsTypes[]>({
  key: "statistics",
  default: [],
});

import { atom } from "recoil";
import type { CenterTypes } from "./types";

export const centersAtoms = atom<CenterTypes[]>({
  key: "centers",
  default: [],
});

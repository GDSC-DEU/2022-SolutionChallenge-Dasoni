import { atom } from "recoil";
import type { SupportTypes } from "./types";

export const supportsAtom = atom<SupportTypes[]>({
  key: "supports",
  default: [],
});

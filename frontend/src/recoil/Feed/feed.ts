import { atom } from "recoil";
import { FeedTypes } from "./types";

export const feedsAtoms = atom<FeedTypes[]>({
  key: "feeds",
  default: [],
});

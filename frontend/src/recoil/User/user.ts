import { atom } from "recoil";
import { UserTypes } from "./types";

export const userAtom = atom<UserTypes>({
  key: "user",
  default: {
    stateType: null,
  },
});

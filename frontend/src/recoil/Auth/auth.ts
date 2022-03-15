import { atom } from "recoil";
import { AuthTypes } from "./types";

export const authAtom = atom<AuthTypes>({
  key: "auth",
  default: {
    token: null,
    roleType: "ROLE_GUEST",
  },
});

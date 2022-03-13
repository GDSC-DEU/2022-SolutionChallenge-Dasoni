import { selector } from "recoil";
import { authAtom } from "./auth";

export const getAuth = selector({
  key: "getAuth",
  get: ({ get }) => {
    const auth = get(authAtom);
    return auth;
  },
});

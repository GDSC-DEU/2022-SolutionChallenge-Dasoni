import { selector } from "recoil";
import { userAtom } from "./user";

export const getUser = selector({
  key: "getUser",
  get: ({ get }) => {
    const user = get(userAtom);
    return user;
  },
});

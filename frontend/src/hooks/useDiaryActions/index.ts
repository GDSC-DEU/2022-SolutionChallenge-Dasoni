import axios from "axios";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { authAtom } from "recoil/Auth";
import { diariesAtom } from "recoil/Diary";

function useDiaryActions() {
  const setDiaries = useSetRecoilState(diariesAtom);
  const auth = useRecoilValue(authAtom);

  async function getDiaries(
    url: string,
    { year, month }: { year: number; month: number }
  ) {
    let config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
        "Content-Type": "application/json",
      },
      params: {
        year,
        month,
      },
    };

    await axios
      .get(url, config)
      .then((res) => {
        setDiaries(res.data.diaries);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return {
    getDiaries,
  };
}

export default useDiaryActions;

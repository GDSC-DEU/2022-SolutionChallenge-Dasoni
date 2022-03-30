import axios from "axios";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { authAtom } from "recoil/Auth";
import { statisticsAtom } from "recoil/Statistics";
import { DASONI_BACKEND_API } from "secret";

function useStatisticsActions() {
  const auth = useRecoilValue(authAtom);
  const setStatistics = useSetRecoilState(statisticsAtom);

  async function getStatistics() {
    let config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
        "Content-Type": "application/json",
      },
    };

    await axios
      .get(`${DASONI_BACKEND_API}/statistics/chart`, config)
      .then((res) => {
        console.log(res.data);
        setStatistics(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return {
    getStatistics,
  };
}

export default useStatisticsActions;

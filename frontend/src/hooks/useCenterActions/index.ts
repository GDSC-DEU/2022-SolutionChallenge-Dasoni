import axios from "axios";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { authAtom } from "recoil/Auth";
import { centersAtoms } from "recoil/Center";
import { DASONI_BACKEND_API } from "secret";

function useCenterActions() {
  const auth = useRecoilValue(authAtom);
  const setCenters = useSetRecoilState(centersAtoms);

  async function getCenters() {
    let config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
        "Content-Type": "application/json",
      },
    };

    await axios
      .get(`${DASONI_BACKEND_API}/centers`, config)
      .then((res) => {
        setCenters(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return {
    getCenters,
  };
}

export default useCenterActions;

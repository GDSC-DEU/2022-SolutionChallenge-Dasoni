import axios from "axios";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { authAtom } from "recoil/Auth";
import { supportsAtom } from "recoil/Support";
import { DASONI_BACKEND_API } from "secret";

function useSupportActions() {
  const auth = useRecoilValue(authAtom);
  const setSupports = useSetRecoilState(supportsAtom);

  async function getSupports(size: number) {
    let config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
        "Content-Type": "application/json",
      },
      params: {
        size,
      },
    };

    await axios
      .get(`${DASONI_BACKEND_API}/boards`, config)
      .then((res) => {
        setSupports(res.data.boards);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return {
    getSupports,
  };
}

export default useSupportActions;

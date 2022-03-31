import axios from "axios";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { authAtom } from "recoil/Auth";
import { feedsAtoms } from "recoil/Feed";
import { DASONI_BACKEND_API } from "secret";

function useFeedActions() {
  const auth = useRecoilValue(authAtom);
  const setFeeds = useSetRecoilState(feedsAtoms);

  async function getFeeds() {
    let config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
        "Content-Type": "application/json",
      },
    };

    await axios
      .get(`${DASONI_BACKEND_API}/feeds`, config)
      .then((res) => {
        console.log(res.data.resources.content);
        setFeeds(res.data.resources.content);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return {
    getFeeds,
  };
}

export default useFeedActions;

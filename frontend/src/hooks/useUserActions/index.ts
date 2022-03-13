import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { userAtom } from "recoil/User";
import { authAtom } from "recoil/Auth";
import { DASONI_BACKEND_API, OAuthClientId } from "secret";

function useUserActions() {
  const setAuth = useSetRecoilState(authAtom);
  const setUser = useSetRecoilState(userAtom);
  let navigate = useNavigate();

  async function googleLogin(response: any) {
    const { code } = response;

    const body = new URLSearchParams({
      code,
      redirect_uri: "http://localhost:3000",
    });

    const options = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "*/*",
      },
    };

    await axios
      .post(`${DASONI_BACKEND_API}/oauth2/login/google`, body, options)
      .then((res) => {
        setAuth(res.data.token);
        setUser(res.data.roleType);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return {
    googleLogin,
  };
}

export default useUserActions;

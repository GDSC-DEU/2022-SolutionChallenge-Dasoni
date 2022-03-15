import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { userAtom } from "recoil/User";
import { authAtom } from "recoil/Auth";
import { DASONI_BACKEND_API } from "secret";

function useUserActions() {
  const setAuth = useSetRecoilState(authAtom);
  const setUser = useSetRecoilState(userAtom);
  const auth = useRecoilValue(authAtom);
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
        setAuth({ token: res.data.token, roleType: res.data.roleType });

        auth.roleType == "ROLE_GUEST" && navigate("/signup");
        auth.roleType == "ROLE_USER" && navigate("/");
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  function logout() {
    setAuth({ token: null });
    navigate("/login");
  }

  async function signup(stateType: string) {
    let config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
        "Content-Type": "application/json",
      },
    };

    await axios
      .patch(
        `${DASONI_BACKEND_API}/users`,
        {
          stateType,
        },
        config
      )
      .then((res) => {
        setUser({ stateType });
        navigate("/");
      });
  }

  return {
    googleLogin,
    logout,
    signup,
  };
}

export default useUserActions;

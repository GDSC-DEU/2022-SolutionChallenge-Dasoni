import * as React from "react";
import { useCallback } from "react";
import axios from "axios";
import { DASONI_BACKEND_API, OAuthClientId } from "../../secret";
import { GoogleLogin } from "react-google-login";

import { LoginSection, Logo, LoginList } from "./styles";

function Login() {
  const onResponseGoogleSuccess = async (response: { code: string }) => {
    const { code } = response;

    console.log(code);

    // const response2 = await axios.post(
    //   `${DASONI_BACKEND_API}/oauth2/login/google`,
    //   {
    //     code,
    //     redirect_uri: "http://localhost:3000/",
    //   },
    //   {
    //     headers: {
    //       "Content-type": "application/x-www-form-urlencoded",
    //     },
    //   }
    // );

    // axios
    //   .post({})
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const onResponseGoogleFailure = useCallback((response) => {
    console.log(response);
  }, []);

  return (
    <LoginSection>
      <Logo>
        <img src="" alt="dasoni-logo" />
      </Logo>
      <LoginList>
        <GoogleLogin
          clientId={OAuthClientId}
          responseType="code"
          scope="https://www.googleapis.com/auth/userinfo.email"
          buttonText="Register with Google"
          onFailure={onResponseGoogleFailure}
          onSuccess={onResponseGoogleSuccess}
          redirectUri="http://localhost:3000"
        />
        {/* <GoogleLoginButton onClick={() => googleLogin()}>
          <img src="" alt="google" />
          <span>Register with Google</span>
        </GoogleLoginButton> */}
      </LoginList>
    </LoginSection>
  );
}

export default Login;

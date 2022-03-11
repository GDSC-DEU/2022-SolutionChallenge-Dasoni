import * as React from "react";
<<<<<<< HEAD
import { GoogleLogin } from "react-google-login";

import { LoginSection, Logo, LoginList, GoogleLoginButton } from "./styles";

function Login() {
  const onResponseGoogleSuccess = async (response: { code: string }) => {
    const { code } = response;

=======
import { useCallback } from "react";
import axios from "axios";
import { DASONI_BACKEND_API, OAuthClientId } from "../../secret";
import { GoogleLogin } from "react-google-login";

// import { LoginSection, Logo, LoginList } from "./styles";

function Login() {
  const onResponseGoogleSuccess = async (response: any) => {
    const { code } = response;

    console.log(code);

    await axios
      .post(
        `${DASONI_BACKEND_API}/oauth2/login/google`,
        {
          code,
          redirect_uri: "http://localhost:3000",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept-Encoding": "gzip, deflate, br",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.response);
      });
>>>>>>> test
  };

  const onResponseGoogleFailure = useCallback((response) => {
    console.log(response);
  }, []);

  return (
<<<<<<< HEAD
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
          onSuccess={onResponseGoogleSuccess}
          onFailure={onResponseGoogleFailure}
          redirectUri="http://localhost:3000"
        />
          <span>Register with Google</span>
        </GoogleLoginButton>
      </LoginList>
    </LoginSection>
=======
    // <LoginSection>
    //   <Logo>
    //     <img src="" alt="dasoni-logo" />
    //   </Logo>
    //   <LoginList>
    <div>
      <GoogleLogin
        clientId={OAuthClientId}
        responseType="code"
        accessType="offline"
        buttonText="Register with Google"
        onFailure={onResponseGoogleFailure}
        onSuccess={onResponseGoogleSuccess}
        redirectUri="http://localhost:3000"
      />
    </div>

    //   </LoginList>
    // </LoginSection>
>>>>>>> test
  );
}

export default Login;

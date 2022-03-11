import * as React from "react";
import { useCallback } from "react";
import axios from "axios";
import { DASONI_BACKEND_API, OAuthClientId } from "../../secret";
import { GoogleLogin } from "react-google-login";

import { LoginSection, Logo, LoginList, GoogleLoginButton } from "./styles";
import { Navigate } from "react-router-dom";

function Login() {
  const onResponseGoogleSuccess = async (response: any) => {
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
        console.log(res);
        <Navigate to="/" />;
      })
      .catch((error) => {
        console.log(error.response);
      });
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
          accessType="offline"
          buttonText="Register with Google"
          onFailure={onResponseGoogleFailure}
          onSuccess={onResponseGoogleSuccess}
          redirectUri="http://localhost:3000"
          render={(renderProps) => (
            <GoogleLoginButton
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <img src="" alt="google-logo" />
              <span>Register with Google</span>
            </GoogleLoginButton>
          )}
        />
      </LoginList>
    </LoginSection>
  );
}

export default Login;

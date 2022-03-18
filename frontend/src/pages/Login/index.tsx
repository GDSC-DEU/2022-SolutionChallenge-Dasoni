import * as React from "react";
import { useCallback } from "react";
import { GoogleLogin } from "react-google-login";

import { OAuthClientId } from "secret";
import useUserActions from "hooks/useUserActions";

import logoImg from "assets/logo/dasoni_logo.svg";
import { LoginSection, Logo, LoginList, GoogleLoginButton } from "./styles";

function Login() {
  const userActions = useUserActions();
  const onResponseGoogleFailure = useCallback((response) => {
    console.log(response);
  }, []);

  return (
    <LoginSection>
      <Logo>
        <img src={logoImg} alt="dasoni-logo" />
      </Logo>
      <LoginList>
        <GoogleLogin
          clientId={OAuthClientId}
          responseType="code"
          accessType="offline"
          buttonText="Register with Google"
          onFailure={onResponseGoogleFailure}
          onSuccess={userActions.googleLogin}
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

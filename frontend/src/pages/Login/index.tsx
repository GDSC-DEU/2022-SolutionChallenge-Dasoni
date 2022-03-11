import * as React from "react";
import { GoogleLogin } from "react-google-login";

import { LoginSection, Logo, LoginList, GoogleLoginButton } from "./styles";

function Login() {
  const onResponseGoogleSuccess = async (response: { code: string }) => {
    const { code } = response;

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
          onSuccess={onResponseGoogleSuccess}
          onFailure={onResponseGoogleFailure}
          redirectUri="http://localhost:3000"
        />
          <span>Register with Google</span>
        </GoogleLoginButton>
      </LoginList>
    </LoginSection>
  );
}

export default Login;

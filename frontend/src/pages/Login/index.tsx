import * as React from "react";

import { LoginSection, Logo, LoginList, GoogleLoginButton } from "./styles";

function Login() {
  return (
    <LoginSection>
      <Logo>
        <img src="/images/logo.png" alt="dasoni-logo" />
      </Logo>
      <LoginList>
        <GoogleLoginButton>
          <img src="/images/google.png" alt="google" />
          <span>Register with Google</span>
        </GoogleLoginButton>
      </LoginList>
    </LoginSection>
  );
}

export default Login;

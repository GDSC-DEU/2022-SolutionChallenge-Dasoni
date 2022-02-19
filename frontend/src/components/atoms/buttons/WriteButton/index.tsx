import * as React from "react";
import { Link } from "react-router-dom";

import { WriteButtonWrapper } from "./styles";

function WriteButton() {
  return (
    <>
      <Link to="/post">
        <WriteButtonWrapper>write</WriteButtonWrapper>
      </Link>
    </>
  );
}

export default WriteButton;

import * as React from "react";
import { Link } from "react-router-dom";

import { WriteButtonWrapper } from "./styles";

import pen from "assets/icons/pen.png";

function WriteButton() {
  return (
    <>
      <Link to="/post">
        <WriteButtonWrapper>
          <img src={pen} />
        </WriteButtonWrapper>
      </Link>
    </>
  );
}

export default WriteButton;

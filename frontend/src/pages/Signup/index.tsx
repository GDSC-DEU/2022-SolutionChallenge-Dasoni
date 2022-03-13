import { Header } from "components/atoms/wrapper/Header";
import { ClickButton } from "components/atoms/buttons/ClickButton";
import * as React from "react";
import { useState, SetStateAction, Dispatch } from "react";
import { Link } from "react-router-dom";

import { SignupSection } from "./styles";

function Signup() {

  const [unmarriedClicked, setUnmarriedClicked] = useState(false);
  const [momClicked, setMomClicked] = useState(false);
  const [dadClicked, setDadClicked] = useState(false);

  const handleClick = (
    state: boolean,
    setter: Dispatch<SetStateAction<boolean>>
  ) => {
    setUnmarriedClicked(false);
    setMomClicked(false);
    setDadClicked(false);
    setter(!state);
  };

  return (
    <>
      <Header position="middle">
        <div className="logo">
          <Link to="/">DASONI</Link>
        </div>
      </Header>
      <SignupSection>
        <div className="introduce">Please select your current status.</div>
        <ClickButton
          onClick={() => handleClick(unmarriedClicked, setUnmarriedClicked)}
          clicked={unmarriedClicked}
        >
          I’m an unmarried pregnant woman now.
        </ClickButton>
        <ClickButton
          onClick={() => handleClick(momClicked, setMomClicked)}
          clicked={momClicked}
        >
          (Mom) I have a baby.
        </ClickButton>
        <ClickButton
          onClick={() => handleClick(dadClicked, setDadClicked)}
          clicked={dadClicked}
        >
          (Dad) I have a baby.
        </ClickButton>
      </SignupSection>
    </>
  );
}

export default Signup;

import Header from "components/organisms/Header";
import { ClickButton } from "components/atoms/buttons/ClickButton";
import * as React from "react";
import { useState, SetStateAction, Dispatch } from "react";
import { Link } from "react-router-dom";

import useUserActions from "hooks/useUserActions";

import { SignupSection } from "./styles";

function Signup() {
  const userActions = useUserActions();
  const [stateType, setStateType] = useState("");

  const [unmarriedClicked, setUnmarriedClicked] = useState(false);
  const [momClicked, setMomClicked] = useState(false);
  const [dadClicked, setDadClicked] = useState(false);

  const handleClick = (
    state: boolean,
    setter: Dispatch<SetStateAction<boolean>>,
    stateType: string
  ) => {
    setUnmarriedClicked(false);
    setMomClicked(false);
    setDadClicked(false);
    setter(!state);
    setStateType(stateType);
  };

  return (
    <>
      <Header position="middle" />
      <SignupSection>
        <div className="introduce">Please select your current status.</div>
        <ClickButton
          kind="line"
          onClick={() =>
            handleClick(unmarriedClicked, setUnmarriedClicked, "UNMARRIED")
          }
          clicked={unmarriedClicked}
        >
          I’m an unmarried pregnant woman now.
        </ClickButton>
        <ClickButton
          kind="line"
          onClick={() => handleClick(momClicked, setMomClicked, "MOTHER")}
          clicked={momClicked}
        >
          (Mom) I have a baby.
        </ClickButton>
        <ClickButton
          kind="line"
          onClick={() => handleClick(dadClicked, setDadClicked, "FATHER")}
          clicked={dadClicked}
        >
          (Dad) I have a baby.
        </ClickButton>
        <ClickButton kind="solid" onClick={() => userActions.signup(stateType)}>
          Sign Up
        </ClickButton>
      </SignupSection>
    </>
  );
}

export default Signup;

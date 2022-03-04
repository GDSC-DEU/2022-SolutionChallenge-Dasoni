import * as React from "react";
import { ToggleSwitchButtonWrap, ToogleBox, ToggleBoxLabel } from "./styles";

interface ToggleSwitchButtonProps {}

function ToggleSwitchButton(props: ToggleSwitchButtonProps) {
  // const { checked, onChange, className, label, labelClassName, ...rest } = props;

  return (
    <>
      <ToggleSwitchButtonWrap>
        <ToogleBox id="toggle-switch-button" type="checkbox" />
        <ToggleBoxLabel htmlFor="toggle-switch-button" />
      </ToggleSwitchButtonWrap>
    </>
  );
}

export default ToggleSwitchButton;

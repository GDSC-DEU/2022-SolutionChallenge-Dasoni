import * as React from "react";
import { ToggleSwitchButtonWrap, ToogleBox, ToggleBoxLabel } from "./styles";

interface ToggleSwitchButtonProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ToggleSwitchButton(props: ToggleSwitchButtonProps) {
  const { checked, onChange } = props;
  // const { checked, onChange, className, label, labelClassName, ...rest } = props;

  return (
    <>
      <ToggleSwitchButtonWrap>
        <ToogleBox
          id="toggle-switch-button"
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <ToggleBoxLabel htmlFor="toggle-switch-button" />
      </ToggleSwitchButtonWrap>
    </>
  );
}

export default ToggleSwitchButton;

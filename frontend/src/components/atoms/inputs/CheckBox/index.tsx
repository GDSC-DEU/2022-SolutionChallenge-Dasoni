import * as React from "react";

import { CheckBoxWrap } from "./styles";

interface CheckBoxProps {
  children: React.ReactNode;
  checkboxId: string;
}

function CheckBox(props: CheckBoxProps) {
  // const [checked, setChecked] = React.useState(false);

  return (
    <CheckBoxWrap>
      <input type="checkbox" id={props.checkboxId} />
      <label htmlFor={props.checkboxId}></label>
      {props.children}
    </CheckBoxWrap>
  );
}

export default CheckBox;

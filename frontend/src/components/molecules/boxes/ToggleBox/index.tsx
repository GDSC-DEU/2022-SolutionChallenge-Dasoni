import * as React from "react";
import { useState } from "react";

import chevron_up from "assets/icons/chevron-up.png";
import chevron_down from "assets/icons/chevron-down.png";

import { ToggleBoxWrap } from "./styles";

function ToggleBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ToggleBoxWrap onClick={() => setIsOpen(!isOpen)}>
      <span>All</span>
      <img src={isOpen ? chevron_up : chevron_down} />
    </ToggleBoxWrap>
  );
}

export default ToggleBox;

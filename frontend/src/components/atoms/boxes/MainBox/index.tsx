import * as React from "react";

import { MainBoxWrap } from "./styles";

export interface MainBoxProps {
  children: React.ReactNode;
}

function MainBox({ children }: MainBoxProps) {
  return <MainBoxWrap>{children}</MainBoxWrap>;
}

export default MainBox;

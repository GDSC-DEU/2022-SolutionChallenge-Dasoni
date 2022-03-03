import * as React from "react";

import { ShadowBoxWrap } from "./styles";

export interface ShadowBoxProps {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
}

function ShadowBox(props: ShadowBoxProps) {
  const { children, align } = props;

  return <ShadowBoxWrap align={align}>{children}</ShadowBoxWrap>;
}

export default ShadowBox;

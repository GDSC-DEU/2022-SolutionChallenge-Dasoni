import * as React from "react";
import { SumbitButtonWrap } from "./styles";

function SumbitButton(props: { children: React.ReactNode }) {
  return <SumbitButtonWrap type="submit">{props.children}</SumbitButtonWrap>;
}

export default SumbitButton;

import * as React from "react";
import { CalloutBoxWrap } from "./styles";

function CalloutBox(props: { children: React.ReactNode }) {
  const { children } = props;

  return <CalloutBoxWrap>{children}</CalloutBoxWrap>;
}
export default CalloutBox;

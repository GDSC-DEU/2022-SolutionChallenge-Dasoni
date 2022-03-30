import * as React from "react";

import { CenterContentBoxWrap } from "./styles";

import call from "assets/icons/call.png";
import { CenterTypes } from "recoil/Center";

function CenterContentBox(props: { information: CenterTypes }) {
  const { address, link, name, number } = props.information;

  return (
    <CenterContentBoxWrap>
      <div className="content">
        <div className="content-title">{name}</div>
        <div className="content-address">{address}</div>
        <div className="content-phone-number">{number}</div>
        <a href={link}>
          <div className="content-homepage-url">{link}</div>
        </a>
      </div>
      <img src={call} />
    </CenterContentBoxWrap>
  );
}

export default CenterContentBox;

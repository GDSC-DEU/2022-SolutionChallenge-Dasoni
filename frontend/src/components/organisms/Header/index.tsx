import * as React from "react";
import { Link } from "react-router-dom";

import { HeaderWrap, ButtonBox } from "./styles";
import SlideBar from "components/organisms/navbars/SlideBar";

import location from "assets/icons/location.png";
import hamburger_menu from "assets/icons/hamburger_menu.png";
import dasoni_logo_letter from "assets/logo/dasoni_logo_letter.svg";

function Header(props: { position?: string }) {
  const [display, setDisplay] = React.useState(false);

  return (
    <HeaderWrap position={props.position}>
      <div className="logo">
        <Link to="/">
          <img src={dasoni_logo_letter} alt="DASONI" />
        </Link>
      </div>
      {props.position !== "middle" && (
        <ButtonBox>
          <img src={location} />
          <img onClick={() => setDisplay(!display)} src={hamburger_menu} />
        </ButtonBox>
      )}
      <SlideBar display={display} />
    </HeaderWrap>
  );
}

export default Header;

import * as React from "react";
import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

import arrow_left from "assets/icons/arrow-left.png";
import dropdown_menu from "assets/icons/dropdown-menu.png";

import { BackNavWrap } from "./styles";

interface BackNavProps {
  children?: React.ReactNode;
  type: "title" | "detailmenu";
}

function BackNav(props: BackNavProps) {
  const navigate = useNavigate();

  return (
    <BackNavWrap type={props.type}>
      <img
        className="back_button"
        src={arrow_left}
        onClick={() => navigate(-1)}
      />
      <div className="title">{props.children}</div>
      <img className="detail_button" src={dropdown_menu} />
    </BackNavWrap>
  );
}

export default BackNav;

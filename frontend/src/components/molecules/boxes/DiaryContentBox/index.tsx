import * as React from "react";

import { DiaryContentBoxWrap } from "./styles";

import very_sad from "assets/emotionIcons/very_sad.svg";
import sad from "assets/emotionIcons/sad.svg";
import normal from "assets/emotionIcons/normal.svg";
import happy from "assets/emotionIcons/happy.svg";
import very_happy from "assets/emotionIcons/very_happy.svg";
import dropdown from "assets/icons/dropdown-menu.png";
import warning from "assets/icons/warning.png";

export interface DiaryContentBoxProps {
  key: string;
  created_date: string;
  title: string;
  content: string;
}

function DiaryContentBox(props: DiaryContentBoxProps) {
  const { key, created_date, title, content } = props;

  return (
    <DiaryContentBoxWrap key={key}>
      <div className="left">
        <div className="warning-signer"></div>
        <img src={normal} className="mood-icon" />
        <div className="date">12 Sat</div>
        {/* <div>{created_date}</div> */}
      </div>
      <div className="center">
        <div className="title">{title}</div>
        <div className="content">{content}</div>
      </div>
      <div className="right">
        <img className="menu-button" src={dropdown} />
        <img className="warning-button" src={warning} />
      </div>
    </DiaryContentBoxWrap>
  );
}

export default DiaryContentBox;

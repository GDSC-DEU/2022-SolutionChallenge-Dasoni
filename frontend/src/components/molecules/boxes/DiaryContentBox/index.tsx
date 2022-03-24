import * as React from "react";

import { DiaryContentBoxWrap } from "./styles";

import verysad from "assets/emotionIcons/verysad.svg";
import sad from "assets/emotionIcons/sad.svg";
import normal from "assets/emotionIcons/normal.svg";
import happy from "assets/emotionIcons/happy.svg";
import veryhappy from "assets/emotionIcons/veryhappy.svg";
import dropdown from "assets/icons/dropdown-menu.png";
import warning from "assets/icons/warning.png";

export interface DiaryContentBoxProps {
  key: string;
  created_date: string;
  title: string;
  content: string;
  emotion: string;
}

function DiaryContentBox(props: DiaryContentBoxProps) {
  const { key, created_date, title, content } = props;
  let emotion = props.emotion.split(" ").join("").toLowerCase();

  return (
    <DiaryContentBoxWrap key={key}>
      <div className="left">
        <div className="warning-signer"></div>
        {(function () {
          if (emotion === "verysad") {
            return <img src={verysad} className="mood-icon" />;
          } else if (emotion === "sad") {
            return <img src={sad} className="mood-icon" />;
          } else if (emotion === "normal") {
            return <img src={normal} className="mood-icon" />;
          } else if (emotion === "happy") {
            return <img src={happy} className="mood-icon" />;
          } else if (emotion === "veryhappy") {
            return <img src={veryhappy} className="mood-icon" />;
          } else return;
        })()}
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

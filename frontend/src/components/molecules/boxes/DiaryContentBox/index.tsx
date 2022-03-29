import * as React from "react";

import { DiaryContentBoxWrap } from "./styles";

import verysad from "assets/emotionIcons/verysad.svg";
import sad from "assets/emotionIcons/sad.svg";
import normal from "assets/emotionIcons/normal.svg";
import happy from "assets/emotionIcons/happy.svg";
import veryhappy from "assets/emotionIcons/veryhappy.svg";
import warning from "assets/icons/warning.png";
import ToggleMenuButton from "components/atoms/buttons/ToggleMenuButton";

export interface DiaryContentBoxProps {
  id: string;
  created_date: string;
  title: string;
  content: string;
  emotion: string;
  checked?: boolean;
}

type Emotion = "verysad" | "sad" | "normal" | "happy" | "veryhappy";
const emotionImages = {
  verysad,
  sad,
  normal,
  happy,
  veryhappy,
};

function DiaryContentBox(props: DiaryContentBoxProps) {
  const { id, created_date, title, content, checked } = props;
  let emotion = props.emotion.split(" ").join("").toLowerCase();

  return (
    <DiaryContentBoxWrap emotion={emotion} checked={checked}>
      <div className="left">
        <img src={emotionImages[emotion as Emotion]} className="mood-icon" />
        <div className="date">12 Sat</div>
        {/* <div>{created_date}</div> */}
      </div>
      <div className="center">
        <div className="title">{title}</div>
        <div className="content">{content}</div>
      </div>
      <div className="right">
        <ToggleMenuButton targetId={id} />
        <img className="warning-button" src={warning} />
      </div>
    </DiaryContentBoxWrap>
  );
}

export default DiaryContentBox;

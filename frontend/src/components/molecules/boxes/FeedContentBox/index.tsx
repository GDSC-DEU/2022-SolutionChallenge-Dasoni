import * as React from "react";

import ToggleMenuButton from "components/atoms/buttons/ToggleMenuButton";

import { FeedContentBoxWrap } from "./styles";

import father from "assets/stateIcons/dad.svg";
import mother from "assets/stateIcons/mom.svg";
import pregnant from "assets/stateIcons/pregnant.svg";

import heart from "assets/icons/heart.png";
import message from "assets/icons/message.png";
import { FeedTypes } from "recoil/Feed";
import { Emotion, emotionImages } from "../DiaryContentBox";

const stateTypeImages = {
  father,
  mother,
  pregnant,
};

type StateType = "mother" | "father" | "pregnant";

function FeedContentBox(props: { contents: FeedTypes }) {
  const { comment, content, like, title } = props.contents;
  let createdTime = props.contents.createdTime.split("T")[0];
  let emotion = props.contents.emotion.split("_").join("").toLowerCase();
  let stateType = props.contents.stateType.toLowerCase();

  return (
    <FeedContentBoxWrap>
      <div className="feed-content-title">
        <img className="emotion" src={emotionImages[emotion as Emotion]} />
        <span>{title}</span>
        <ToggleMenuButton
          targetId="1"
          share={false}
          edit={false}
          delete={true}
        />
      </div>
      <div className="feed-content-content">{content}</div>
      <div className="feed-content-information">
        <div className="feedback">
          <img src={heart} />
          <span>{like}</span>

          <img src={message} />
          <span>{comment}</span>

          <div className="time">• {createdTime}</div>
        </div>
        <div className="writer">
          <img src={stateTypeImages[stateType as StateType]} />
          <span>Anonymous</span>
        </div>
      </div>
    </FeedContentBoxWrap>
  );
}

export default FeedContentBox;

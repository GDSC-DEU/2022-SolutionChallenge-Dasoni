import * as React from "react";

import ToggleMenuButton from "components/atoms/buttons/ToggleMenuButton";

import { FeedContentBoxWrap } from "./styles";

import veryhappy from "assets/emotionIcons/veryhappy.svg";
import happy from "assets/emotionIcons/happy.svg";
import normal from "assets/emotionIcons/normal.svg";
import sad from "assets/emotionIcons/sad.svg";
import verysad from "assets/emotionIcons/verysad.svg";

import dad from "assets/stateIcons/dad.svg";
import mom from "assets/stateIcons/mom.svg";
import pregnant from "assets/stateIcons/pregnant.svg";

import dropdown_menu from "assets/icons/dropdown-menu.png";
import heart from "assets/icons/heart.png";
import message from "assets/icons/message.png";

function FeedContentBox() {
  return (
    <FeedContentBoxWrap>
      <div className="feed-content-title">
        <img className="emotion" src={veryhappy} />
        <span>Tortor Nullam Fringilla</span>
        <ToggleMenuButton targetId="1" />
      </div>
      <div className="feed-content-content">
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae;
      </div>
      <div className="feed-content-information">
        <div className="feedback">
          <img src={heart} />
          <span>3</span>

          <img src={message} />
          <span>12</span>

          <div className="time">• 5m ago</div>
        </div>
        <div className="writer">
          <img src={dad} />
          <span>Anonymous</span>
        </div>
      </div>
    </FeedContentBoxWrap>
  );
}

export default FeedContentBox;

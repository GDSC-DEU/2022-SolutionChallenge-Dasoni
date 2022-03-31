import * as React from "react";

import { SlideBarWrap } from "./styles";

import Home from "assets/icons/home_unactive.png";
import Statistics from "assets/icons/statistics_unactive.png";
import Feed from "assets/icons/feed_unactive.png";
import Welfare from "assets/icons/support_unactive.png";
import Settings from "assets/icons/settings_unactive.png";
import Logout from "assets/icons/logout.png";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userAtom } from "recoil/User";

import FATHER from "assets/stateIcons/dad.svg";
import MATHER from "assets/stateIcons/mom.svg";
import PREGNANT from "assets/stateIcons/pregnant.svg";

type State = "MATHER" | "FATHER" | "PREGNANT";
const stateImages = {
  MATHER,
  FATHER,
  PREGNANT,
};

function SlideBar(props: { display: boolean }) {
  const userState = useRecoilValue(userAtom).stateType;

  return (
    <SlideBarWrap display={props.display}>
      <div className="profile-wrap">
        {userState && (
          <img className="profile" src={stateImages[userState as State]} />
        )}
        <span className="email">seori1004@gmail.com</span>
        <img className="logout" src={Logout} />
      </div>
      <ul className="menu">
        <Link to="/">
          <li>
            <img src={Home} />
            <span>Home</span>
          </li>
        </Link>
        <Link to="/statistics">
          <li>
            <img src={Statistics} />
            <span>Statistics</span>
          </li>
        </Link>
        <Link to="/feed">
          <li>
            <img src={Feed} />
            <span>Feed</span>
          </li>
        </Link>
        <Link to="/support">
          <li>
            <img src={Welfare} />
            <span>Social Servcies</span>
          </li>
        </Link>
        <Link to="/settings">
          <li>
            <img src={Settings} />
            <span>Settings</span>
          </li>
        </Link>
      </ul>
    </SlideBarWrap>
  );
}

export default SlideBar;

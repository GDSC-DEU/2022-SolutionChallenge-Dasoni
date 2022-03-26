import * as React from "react";
import { useState } from "react";

import dropdown from "assets/icons/dropdown-menu.png";

import { ToggleMenuButtonWrap, Menu } from "./styles";
import { Link } from "react-router-dom";

function ToggleMenuButton() {
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <ToggleMenuButtonWrap>
      <img
        className="menu-button"
        src={dropdown}
        onClick={() => setMenuClicked(!menuClicked)}
      />
      <Menu menuClicked={menuClicked}>
        <div className="menu-wrap">
          <ul>
            <li>Share</li>
            <Link to={"/edit"}>
              <li>Edit</li>
            </Link>
            <li>Delete</li>
          </ul>
        </div>
      </Menu>
    </ToggleMenuButtonWrap>
  );
}

export default ToggleMenuButton;

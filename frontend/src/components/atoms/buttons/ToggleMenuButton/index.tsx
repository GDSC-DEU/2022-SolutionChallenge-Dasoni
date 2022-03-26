import * as React from "react";
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";

import useDiaryActions from "hooks/useDiaryActions";

import dropdown from "assets/icons/dropdown-menu.png";

import { ToggleMenuButtonWrap, Menu } from "./styles";

function ToggleMenuButton(props: { diaryId: string }) {
  const diaryActions = useDiaryActions();
  const [menuClicked, setMenuClicked] = useState(false);

  const onDeleteClick = useCallback((e) => {
    e.preventDefault();

    diaryActions.deleteDiary(props.diaryId);
  }, []);

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
            <li onClick={onDeleteClick}>Delete</li>
          </ul>
        </div>
      </Menu>
    </ToggleMenuButtonWrap>
  );
}

export default ToggleMenuButton;

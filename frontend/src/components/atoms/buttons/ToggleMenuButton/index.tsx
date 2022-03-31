import * as React from "react";
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";

import useDiaryActions from "hooks/useDiaryActions";

import dropdown from "assets/icons/dropdown-menu.png";

import { ToggleMenuButtonWrap, Menu } from "./styles";

interface ToggleMenuButtonProps {
  targetId: string;
  share: boolean;
  edit: boolean;
  delete: boolean;
}

function ToggleMenuButton(props: ToggleMenuButtonProps) {
  const diaryActions = useDiaryActions();
  const [menuClicked, setMenuClicked] = useState(false);

  const onDeleteClick = useCallback((e) => {
    e.preventDefault();

    diaryActions.deleteDiary(props.targetId);
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
            {props.share && <li>Share</li>}
            {props.edit && (
              <Link to={"/edit"}>
                <li>Edit</li>
              </Link>
            )}
            {props.delete && <li onClick={onDeleteClick}>Delete</li>}
          </ul>
        </div>
      </Menu>
    </ToggleMenuButtonWrap>
  );
}

export default ToggleMenuButton;

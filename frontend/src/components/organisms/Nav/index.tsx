import * as React from "react";
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";

import { NavWrap } from "./styles";

function Nav() {
  const [currentPage, setCurrentPage] = useState("Diary");

  const onNavItemClicked = useCallback(
    (page: string) => {
      setCurrentPage(page);
    },
    [currentPage]
  );

  return (
    <NavWrap>
      <Link to="/">
        <div
          className={currentPage === "Diary" ? "nav-item current" : "nav-item"}
          onClick={() => onNavItemClicked("Diary")}
        >
          Diary
        </div>
      </Link>

      <Link to="/statistics">
        <div
          className={
            currentPage === "Statistics" ? "nav-item current" : "nav-item"
          }
          onClick={() => onNavItemClicked("Statistics")}
        >
          Statistics
        </div>
      </Link>

      <Link to="/feed">
        <div
          className={currentPage === "Feed" ? "nav-item current" : "nav-item"}
          onClick={() => onNavItemClicked("Feed")}
        >
          Feed
        </div>
      </Link>
    </NavWrap>
  );
}

export default Nav;

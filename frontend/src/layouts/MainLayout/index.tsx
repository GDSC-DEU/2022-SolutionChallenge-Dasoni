import { Header } from "components/atoms/wrapper/Header";
import * as React from "react";
import { useState, useCallback } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

import { ButtonBox, Main, Nav } from "./styles";

function MainLayout() {
  const [currentPage, setCurrentPage] = useState("Diary");

  const onNavItemClicked = useCallback(
    (page: string) => {
      setCurrentPage(page);
    },
    [currentPage]
  );

  return (
    <>
      <Header>
        <div className="logo">
          <Link to="/">DASONI</Link>
        </div>
        <ButtonBox>
          <span className="search"></span>
          <span className="hamberger-menu"></span>
        </ButtonBox>
      </Header>
      <Nav>
        <Link to="/">
          <div
            className={
              currentPage === "Diary" ? "nav-item current" : "nav-item"
            }
            onClick={() => onNavItemClicked("Diary")}
          >
            Diary
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
      </Nav>
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default MainLayout;

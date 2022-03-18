import { Header } from "components/atoms/wrapper/Header";
import * as React from "react";
import { useState, useCallback } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

import { ButtonBox, Main, Nav } from "./styles";

import location from "assets/icons/location.png";
import hamburger_menu from "assets/icons/hamburger_menu.png";
import dasoni_logo_letter from "assets/logo/dasoni_logo_letter.svg";

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
          <Link to="/">
            <img src={dasoni_logo_letter} alt="DASONI" />
          </Link>
        </div>
        <ButtonBox>
          <img src={location} />
          <img src={hamburger_menu} />
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

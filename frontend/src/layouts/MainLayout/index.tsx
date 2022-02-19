import * as React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

import { ButtonBox, Header, Main, Nav } from "./styles";

function MainLayout() {
  return (
    <>
      <Header>
        <div>
          <Link to="/">DASONI</Link>
        </div>
        <ButtonBox>
          <span>Search</span>
          <span>hamberger</span>
        </ButtonBox>
      </Header>
      <Nav>
        <Link to="">
          <div className="nav-item stayed">Diary</div>
        </Link>
        <Link to="">
          <div className="nav-item">Feed</div>
        </Link>
        <Link to="">
          <div className="nav-item">Calender</div>
        </Link>
      </Nav>
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default MainLayout;

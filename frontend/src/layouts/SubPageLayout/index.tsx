import * as React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

import { Header } from "components/atoms/wrapper/Header";
import { ButtonBox } from "layouts/MainLayout/styles";

function SubPageLayout() {
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
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default SubPageLayout;

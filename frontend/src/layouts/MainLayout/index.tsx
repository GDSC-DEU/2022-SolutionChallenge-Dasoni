import * as React from "react";
import { Outlet } from "react-router";

import Header from "components/organisms/Header";

import { Main } from "./styles";

function MainLayout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default MainLayout;

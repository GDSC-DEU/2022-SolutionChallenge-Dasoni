import * as React from "react";
import { Outlet } from "react-router";

import Header from "components/organisms/Header";

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;

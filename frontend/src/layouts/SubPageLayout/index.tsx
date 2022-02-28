import * as React from "react";
import { Outlet } from "react-router";

function SubPageLayout() {
  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default SubPageLayout;

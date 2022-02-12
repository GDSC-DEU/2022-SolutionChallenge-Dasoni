import * as React from 'react';
import { Outlet } from 'react-router';

function Layout() {
  return (
    <>
      Layout
      <Outlet />
    </>
  );
}

export default Layout;

import { Header } from "../../components/atoms/wrapper/Header";
import * as React from "react";
import { Outlet } from "react-router";
import { ButtonBox } from "../../layouts/MainLayout/styles";

function SubPageLayout() {
  return (
    <>
      <Header>
        <div>뒤로가기</div>
        <ButtonBox>
          <span>Search</span>
          <span>hamberger</span>
        </ButtonBox>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default SubPageLayout;

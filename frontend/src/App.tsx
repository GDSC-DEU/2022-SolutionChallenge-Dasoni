import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import MainLayout from "./layouts/MainLayout";
import Diary from "./pages/Diary";
import DiaryPost from "./pages/DiaryPost";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Diary />} />
            <Route path="post" element={<DiaryPost />} />
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;

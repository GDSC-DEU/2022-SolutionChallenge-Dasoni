import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import Diary from "pages/Diary";
import DiaryPost from "pages/DiaryPost";
import Feed from "pages/Feed";
import Statistics from "pages/Statistics";
import Map from "pages/Map";
import Support from "pages/Support";
import Settings from "pages/Settings";
import DiaryWeeklyList from "pages/DiaryWeeklyList";
import Login from "pages/Login";
import Signup from "pages/Signup";
import MainLayout from "layouts/MainLayout";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Diary />} />
              <Route path="feed" element={<Feed />} />
              <Route path="statistics" element={<Statistics />} />
              <Route path="post" element={<DiaryPost />} />
              <Route path="map" element={<Map />} />
              <Route path="support" element={<Support />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            <Route path="/weekly" element={<DiaryWeeklyList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </RecoilRoot>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

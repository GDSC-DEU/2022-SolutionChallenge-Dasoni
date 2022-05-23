import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import Diary from "pages/Diary";
import DiaryPost from "pages/DiaryPost";
import Feed from "pages/Feed";
import Statistics from "pages/Statistics";
import Center from "pages/Center";
import Support from "pages/Support";
import Settings from "pages/Settings";
import DiaryWeeklyList from "pages/DiaryWeeklyList";
import Login from "pages/Login";
import Signup from "pages/Signup";
import MainLayout from "layouts/MainLayout";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme";
import FeedDetail from "pages/FeedDetail";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Diary />} />
              <Route path="diary" element={<Diary />} />
              <Route path="weekly" element={<DiaryWeeklyList />} />
              <Route path="post" element={<DiaryPost />} />
              <Route path="feed" element={<Feed />} />
              <Route path="feedDetail" element={<FeedDetail />} />
              <Route path="statistics" element={<Statistics />} />
              <Route path="support" element={<Support />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="center" element={<Center />} />
          </Routes>
        </RecoilRoot>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";
import Diary from "./pages/Diary";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Diary />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

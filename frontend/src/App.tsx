import * as React from 'react';
import Diary from './pages/Diary';
import Layout from './layouts/Layout';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Diary />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

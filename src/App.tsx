import React from 'react';
import { HashRouter, Outlet, Route, Routes } from 'react-router-dom';

import EA from './views/EA';
import DetailEA from './views/DetailEA';
import Indicator from './views/Indicator';
import DetailIndicator from './views/DetailIndicator';
import Home from './views/Home';
import Main from './views/Main';
import Projects from './views/Projects';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          {/* Home */}
          <Route path="" element={<Home />} />

          {/* EA Section */}
          <Route path="EA" element={<Outlet />}>
            <Route path="" element={<EA />} />
            <Route path=":id" element={<DetailEA />} />
          </Route>

          {/* Indicator Section */}
          <Route path="indicator" element={<Outlet />}>
            <Route path="" element={<Indicator />} />
            <Route path=":id" element={<DetailIndicator />} />
          </Route>

          {/* Projects */}
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

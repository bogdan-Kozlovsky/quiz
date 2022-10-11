import React, { ReactElement } from 'react';

import { Route, Routes } from 'react-router-dom';

import { routes } from 'routes/routes';

const App = (): ReactElement => (
  <div className="h-[100vh] flex items-center justify-center">
    <div className="min-h-[400px] max-h-[400px] max-w-[500px] w-full">
      {routes.map(({ path, Component }) => (
        <Routes key={path}>
          <Route path={path} element={<Component />} />
        </Routes>
      ))}
    </div>
  </div>
);

export default App;

import { Route, Routes, Router as SolidRouter } from '@solidjs/router';

import { PUBLIC_ROUTE_PATH } from './publicRoutePath';
import { Login } from '../pages/Login';
import { Join } from '../pages/Join';

const Router = () => {
  return (
    <SolidRouter>
      <Routes>
        <Route path={PUBLIC_ROUTE_PATH.login} component={Login} />
        <Route path={PUBLIC_ROUTE_PATH.join} component={Join} />
      </Routes>
    </SolidRouter>
  );
};

export default Router;

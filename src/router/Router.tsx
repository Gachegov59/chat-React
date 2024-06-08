import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageChat from '../pages/PageChat';
import PageAuth from '../pages/PageAuth';
import PageError from '../pages/errorPages/PageError';
import GuardRoute from './GuardRouter';
import RoutesConstant from './constant';

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route
        path={RoutesConstant.BASE}
        element={
          <GuardRoute>
            <PageChat />
          </GuardRoute>
        }
      />
      <Route path={RoutesConstant.LOGIN} element={<PageAuth />} />
      <Route path={RoutesConstant.ERROR} element={<PageError />} />
    </Routes>
  );
};

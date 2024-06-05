import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageChat from '../pages/PageChat';
import PageAuth from '../pages/PageAuth';
import PageError from '../pages/errorPages/PageError';
import GuardRoute from './GuardRouter';

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route
        path="/chat"
        element={
          <GuardRoute>
            <PageChat />
          </GuardRoute>
        }
      />
      <Route path="/login" element={<PageAuth />} />
      <Route path="*" element={<PageError />} />
    </Routes>
  );
};

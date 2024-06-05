import { useAppSelector } from '@/hooks/redux';
import PageLoading from '@/pages/PageLoading';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface GuardRouteProps {
  children: JSX.Element;
}

const GuardRoute: FC<GuardRouteProps> = ({ children }) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuth);
  const isLoading = useAppSelector((state) => state.auth.isLoading);
  const initialized = useAppSelector((state) => state.auth.initialized);

  if (isLoading || !initialized) {
    // return <LoaderSpinner size={100} />;
    return <PageLoading />;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default GuardRoute;

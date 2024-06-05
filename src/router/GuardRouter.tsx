import { useAppSelector } from '@/hooks/redux';
import PageLoading from '@/pages/PageLoading';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface GuardRouteProps {
  children: JSX.Element;
}

const GuardRoute: FC<GuardRouteProps> = ({ children }) => {
  const {isAuth} = useAppSelector((state) => state.auth);
  console.log("🚀 ~ isAuth:", isAuth)
  const { isLoading } = useAppSelector((state) => state.auth);
  console.log("🚀 ~ isLoading:", isLoading)

  // if (isLoading || !initialized) {
  //   return <PageLoading />;
  // }
  if (isLoading) {
    return <PageLoading />;
  }

  return isAuth ? children : <Navigate to="/login" />;
};

export default GuardRoute;

import { useAppSelector } from '@/hooks/redux';
import PageLoading from '@/pages/PageLoading';
import { useEffect, FC, useState } from 'react';
import { Navigate } from 'react-router-dom';
import RoutesConstant from '@/router/constant';

interface GuardRouteProps {
  children: JSX.Element;
}

const GuardRoute: FC<GuardRouteProps> = ({ children }) => {
  const { isAuth, initialState } = useAppSelector((state) => state.auth);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (initialState !== undefined) {
      setLoading(false);
    }
  }, [initialState]);

  if (loading) {
    return <PageLoading />;
  }

  if (!isAuth && initialState !== undefined) {
    return <Navigate to={RoutesConstant.LOGIN} />;
  }

  return children;
};

export default GuardRoute;
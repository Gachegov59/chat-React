import { useAppSelector } from '@/hooks/redux';
import PageLoading from '@/pages/PageLoading';
import { useEffect, FC, useState } from 'react';
import { Navigate } from 'react-router-dom';

interface GuardRouteProps {
  children: JSX.Element;
}

const GuardRoute: FC<GuardRouteProps> = ({ children }) => {
  const { isAuth, initialState } = useAppSelector((state) => state.auth);
  const [isAccess, setIsAccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  console.log('GuardRoute-');
  useEffect(() => {
    if (initialState) {
      const isAccessCheck = initialState && isAuth;
      setIsAccess(isAccessCheck);
      setLoading(false);
    }
  }, [isAuth, initialState]);

  if (loading) {
    return <PageLoading />;
  } else {
    return isAccess ? children : <Navigate to="/login" />;
  }
};

export default GuardRoute;

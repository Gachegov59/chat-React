import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import PageLoading from '@/pages/PageLoading';
import { checkAuth } from '@/store/auth/authActions';
import { FC, ReactNode, useEffect } from 'react';

interface AuthWrapperProps {
    children: ReactNode;
}

const AuthWrapper: FC<AuthWrapperProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, [dispatch]);

  if (isLoading) {
    return <PageLoading />;
  }

  return <>{children}</>;
};

export default AuthWrapper;

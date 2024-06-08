import { FC, useEffect } from 'react';
import { AppRouter } from './router/Router';
import { BrowserRouter as Router } from 'react-router-dom';
import { checkAuth } from './store/auth/authActions';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import PageLoading from './pages/PageLoading';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { isAuth, isLoading } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, []);
  if (isLoading) {
    return <PageLoading />;
  }
  console.log('isAuth', isAuth);
  return (
    <div className="App">
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
};

export default App;

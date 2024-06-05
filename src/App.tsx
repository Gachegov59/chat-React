import { FC, useEffect } from 'react';
import { AppRouter } from './router/Router';
import { BrowserRouter as Router } from 'react-router-dom';
import { checkAuth } from './store/auth/authActions';
import { useAppDispatch } from './hooks/redux';

const App: FC = () => {
  const dispatch = useAppDispatch();

  //todo: refactor
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    } else {
      dispatch({ type: 'auth/checkAuth/rejected' });
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
};

export default App;

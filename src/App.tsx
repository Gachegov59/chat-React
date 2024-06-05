import { FC, useEffect } from 'react';
import { AppRouter } from './router/Router';
import { BrowserRouter as Router } from 'react-router-dom';
import { checkAuth } from './store/auth/authActions';
import { useAppDispatch } from './hooks/redux';

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    } else {
      // Manually set initialized to true if there's no token
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

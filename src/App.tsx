import { FC, useEffect } from 'react';
import { AppRouter } from './router/Router';
import { BrowserRouter as Router } from 'react-router-dom';
import { checkAuth } from './store/auth/authActions';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import PageLoading from './pages/PageLoading';
import { useTranslation } from 'react-i18next';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { isAuth, isLoading } = useAppSelector((state) => state.auth);
  const { i18n } = useTranslation();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      console.log('first')
      dispatch(checkAuth());
    }
    document.documentElement.dir = i18n.language === 'iw' ? 'rtl' : 'ltr';
    console.log("🚀 ~ useEffect ~ i18n.language:", i18n.language)
    // console.log('isAuth', isAuth);
  }, [i18n.language]);


  if (isLoading) {
    return <PageLoading />;
  }
  return (
    <div className="App">
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
};

export default App;

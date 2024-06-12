import { FC, useEffect } from 'react';
import { AppRouter } from './router/Router';
import { BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AuthWrapper from './components/AuthWrapper/AuthWrapper';

const App: FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'iw' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <div className="App">
      <BrowserRouter>
        <AuthWrapper>
          <AppRouter />
        </AuthWrapper>
      </BrowserRouter>
    </div>
  );
};

export default App;

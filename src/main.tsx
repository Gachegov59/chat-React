import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Store from './store/store.ts';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import './assets/styles/index.scss';
import './i18n';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.ts';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={Store}>
      <I18nextProvider i18n={i18n}>
        <Toaster />
        <App />
      </I18nextProvider>
    </Provider>
  </StrictMode>
);

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
import { io } from 'socket.io-client';
import React from 'react';
export const API_URL = import.meta.env.API_SOCKET;
// export const API_URL = 'http://localhost:5000';
const socket = io(API_URL);

export const SocketContext = React.createContext(socket);

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <Provider store={Store}>
      <I18nextProvider i18n={i18n}>
        <SocketContext.Provider value={socket}>
          <Toaster />
          <App />
        </SocketContext.Provider>
      </I18nextProvider>
    </Provider>
  // </StrictMode>
);

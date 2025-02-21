import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';


import { lightThemeClassName } from '@admiral-ds/web';
import '@admiral-ds/fonts/VTBGroupUI.css';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <StrictMode>
    <App className={lightThemeClassName} />
  </StrictMode>,
  );
}
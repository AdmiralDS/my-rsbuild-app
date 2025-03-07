import { StrictMode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { DARK_THEME, DropdownProvider, LIGHT_THEME } from '@admiral-ds/react-ui';
import { darkThemeClassName, lightThemeClassName } from '@admiral-ds/web';
import { ThemeProvider } from 'styled-components';

import './index.css';
import '@admiral-ds/fonts/VTBGroupUI.css';

const Root = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');

    if (mq.matches) {
      setIsDark(true);
    }

    const changeThemeHandler = (ev: MediaQueryListEvent) => setIsDark(ev.matches);
    // This callback will fire if the perferred color scheme changes without a reload
    mq.addEventListener('change', changeThemeHandler);
    return mq.removeEventListener('change', changeThemeHandler);
  }, []);
  return (
    <StrictMode>
      <ThemeProvider theme={isDark ? DARK_THEME : LIGHT_THEME}>
        <DropdownProvider>
          <App className={isDark ? darkThemeClassName : lightThemeClassName} />
        </DropdownProvider>
      </ThemeProvider>
    </StrictMode>
  );
};
const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(<Root />);
}

import { useState } from 'react';
import './App.css';
import styles from './button.module.css';

// Импорт иконки как URL ресурс. Это дефолтное поведене для vite (https://vitejs.dev/guide/assets.html#importing-asset-as-url)
import reactLogo from './assets/react.svg';

// Импорт оптимизированной иконки через настроенный SVGR лоадер (https://react-svgr.com/docs/what-is-svgr/)
// import ArrowRightOutline from '@admiral-ds/icons/build/category/CreatePullRequestSolid.svg?react';

// Импорт оригинала иконки через настроенный SVGR лоадер (https://react-svgr.com/docs/what-is-svgr/)
// import BusSolid from '@admiral-ds/icons/public/icons/category/Bus Solid.svg?react';

// Импорт иконки как готового реакт компонента (лоадер не требуется)
// import { CategoryBusOutline } from '@admiral-ds/icons';

import {
  // Button,
  textStyle,
  FocusBox,
  inputlineClassName,
  panelClassName,
  Menu,
  MenuItem,
  menuItemClassName,
} from '@admiral-ds/web';

import { Button } from './components/Button';

// import { panelClassName } from '@admiral-ds/web/dist/components/Panel/index.d.ts'
console.log('panelClassName ', panelClassName)

function App({className}) {
  const [count, setCount] = useState(0);



  return (
    <div className={className}>
      <div>
        <a href="https://rsbuild.dev" target="_blank" rel="noreferrer">
          {/* импорт иконки через директорию assets. Доступ к этой директории есть и у index.html */}
          <img src="/rsbuild-logo.svg" className="logo" alt="Rsbuild logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Rsbuild + React</h1>
      <div className="card">
          <FocusBox data-size="s">
            <input
              className={inputlineClassName}
              onFocus={() => {
                // setIsPopoverOpen(true);
              }}
              onBlur={() => {
                // setIsPopoverOpen(true);
              }}
            />
          </FocusBox>
        <br />
        <br />
        <FocusBox data-size="m">
          <input className={inputlineClassName} />
        </FocusBox>
        <FocusBox data-size="xl">
          <input className={inputlineClassName} />
        </FocusBox>
        <br />
        <div className={panelClassName}>
          <Menu data-size="l">
            <MenuItem>Default</MenuItem>
            <MenuItem aria-disabled>Default</MenuItem>
            <MenuItem>Default</MenuItem>
          </Menu>
        </div>
        <br />
        <div className={panelClassName}>
          <Menu>
            <li className={menuItemClassName}>Default</li>
            <li className={menuItemClassName}>Default</li>
            <li className={menuItemClassName}>Default</li>
          </Menu>
        </div>
        <br />
        <div className={panelClassName}>
          <Menu data-size="s">
            <li className={menuItemClassName}>Default</li>
            <li className={menuItemClassName}>Default</li>
            <li className={menuItemClassName}>Default</li>
          </Menu>
        </div>
        <span className={textStyle['Subtitle/Subtitle 2']}>
          Крупный шрифт параграфа, может использоваться как подзаголовок
        </span>

        <br />
        <Button
          size="large"
          onClick={() => {
            setCount((count) => count + 1);
          }}
          primary
        >
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </div>
  );
}

export default App;

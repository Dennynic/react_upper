import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import cn from './helpers/classNames/classNames';
import styles from './styles/styles.scss';

import { AboutLazy } from './pages/about-page/about.async';
import { MainLazy } from './pages/main-page/main.async';
import { useTheme } from './theme/useTheme';

const App = () => {
    const {theme, toggleTheme} = useTheme();
    const appClassNames = cn(styles.app, {}, [styles[theme]]);
  return (
    <div className={appClassNames}>
      <div className={styles.mainMenu}>
        <button onClick={toggleTheme}>Сменить тему</button>
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>О сайте</Link>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutLazy />} />
          <Route path={'/'} element={<MainLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

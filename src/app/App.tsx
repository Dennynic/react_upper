import React from 'react';
import cn from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/theme-provider';

import { AppRouter } from './providers/router';

import styles from './styles/styles.scss';
import { Navbar } from 'widgets/Navbar';



const App = () => {
    const {theme, toggleTheme} = useTheme();
    const appClassNames = cn(styles.app, {}, [styles[theme]]);
  return (
    <div className={appClassNames}>
      <div className={styles.mainMenu}>
        <button onClick={toggleTheme}>Сменить тему</button>
        <Navbar/>
      </div>
      <AppRouter/>
      
    </div>
  );
};

export default App;

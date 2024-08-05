import React from "react";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

import cn from 'classnames';
import styles from './styles.scss';



interface NavbarProps{
    className?: string;
   
}

export const Navbar = ({className}: NavbarProps) => {
  return (

    <div className={cn(styles.navbar, className)}>
        <div className={styles.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} className={styles.mainLink} to={'/'}>Главная</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О сайте</AppLink>
        </div>
      
    </div>
  )
};



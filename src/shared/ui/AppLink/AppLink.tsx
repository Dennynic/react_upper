import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import cn from 'classnames';
import styles from './styles.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = props => {
  const { className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;
  return (
    <Link
      to={to}
      className={cn(className, [styles.appLink,  styles[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

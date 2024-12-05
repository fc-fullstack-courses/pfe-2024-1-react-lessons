import React from 'react';
import ComponentD from '../D';
import { withTheme, withUser } from '../../../hocs';
import styles from './C.module.css';
import CONSTANTS from '../../../configs';

const ComponentC = (props) => {
  const { forC, theme, user, ...restOfCProps } = props;

  let currentThemeClass;

  if (theme === CONSTANTS.THEMES.DARK_THEME) {
    currentThemeClass = styles.darkTheme;
  } else if (theme === CONSTANTS.THEMES.LIGHT_THEME) {
    currentThemeClass = styles.lightTheme;
  }

  const className = `${styles.container} ${currentThemeClass}`;

  return (
    <article className={className}>
      <h2>ComponentC</h2>
      <p>{forC}</p>
      <p>
        {user.firstName} {user.lastName}
      </p>
      <p>Поточна тема: {theme}</p>
      <ComponentD {...restOfCProps} />
    </article>
  );
};

// Використання КВП
// const ComponentCWithTheme = withTheme(ComponentC);
// const ComponentCWithThemeAndUser = withUser(ComponentCWithTheme);

// export default ComponentCWithThemeAndUser;

export default withUser(withTheme(ComponentC));

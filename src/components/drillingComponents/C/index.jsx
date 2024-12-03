import React from 'react';
import ComponentD from '../D';
import { UserContext, ThemeContext } from '../../../contexts';
import styles from './C.module.css';
import CONSTANTS from '../../../configs';


const ComponentC = (props) => {
  const { forC, ...restOfCProps } = props;

  const renderWithThemeContext = ([theme]) => {
    let currentThemeClass;

    if (theme === CONSTANTS.THEMES.DARK_THEME) {
      currentThemeClass = styles.darkTheme;
    } else if (theme === CONSTANTS.THEMES.LIGHT_THEME) {
      currentThemeClass = styles.lightTheme;
    }

    const className = `${styles.container} ${currentThemeClass}`;

    return (
      <UserContext.Consumer>
        {(user) => {
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
        }}
      </UserContext.Consumer>
    );
  };

  return (
    <ThemeContext.Consumer>{renderWithThemeContext}</ThemeContext.Consumer>
  );
};

export default ComponentC;

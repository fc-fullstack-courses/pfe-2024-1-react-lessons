import React from 'react';
import ComponentD from '../D';
import { UserContext, ThemeContext } from '../../../contexts';
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


function ComponentCWithTheme(props) {
  return (
    <ThemeContext.Consumer>
      {([theme, switchTheme]) => {
        return (
          <ComponentC
            theme={theme}
            switchTheme={switchTheme}
            user={props.user}
          />
        );
      }}
    </ThemeContext.Consumer>
  );
}

class ComponentCWithThemeAndUser extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {(user) => <ComponentCWithTheme user={user} />}
      </UserContext.Consumer>
    );
  }
}

export default ComponentCWithThemeAndUser;
